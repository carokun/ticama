const express = require('express');
const router = express.Router();
const multer = require('multer');
const models = require('../models/models');
const WorkExperience = models.WorkExperience;
const Skill = models.Skill;
const User = models.User;
const Competition = models.Competition;
const aws = require('aws-sdk');
const upload = multer();
const s3 = new aws.S3();

// FILE UPLOADING ROUTES
router.post('/upload/image', upload.single('content'), (req, res) => {
  if (!req.file || !req.body) {
    return res.status(402).json({error: 'Missing files'})
  }

  if (!req.file) {
    return res.status(403).json({ error: 'Invalid file.' });
  }

  if (!req.file.originalname) {
    return res.status(403).json({ error: 'Invalid file name.' });
  }

  if (!['image/png', 'application/pdf'].includes(req.file.mimetype)) {
    return res.status(403).json({ error: 'Invalid file type.' });
  }

  const s3Params = {
    Bucket: process.env.S3_BUCKET,
    Key: req.body.username + '-' + req.file.originalname,
    ContentType: req.file.mimetype,
    Body: req.file.buffer,
  };

  s3.putObject(s3Params).promise()
  .then(data => {
    User.findOne({username: req.body.username})
    .then((user) => {
      user.image = 'https://s3-us-west-2.amazonaws.com/mirathon/' + req.body.username + '-' + req.file.originalname;
      user.save((err, user) => {
        if (err) {
          console.log('Failed to save photo');
          res.json({failure: err})
        } else {
          console.log('Successfully saved photo');
          res.json({success: true})
        }
      })
    })
  })
  .catch(err => {
    console.log(err);
    res.status(403).json({ error: 'Not authorized.' });
  });
});


router.post('/upload/resume', upload.single('content'), (req, res) => {
  if (!req.file) {
    return res.status(403).json({ error: 'Invalid file.' });
  }

  if (!req.file.originalname) {
    return res.status(403).json({ error: 'Invalid file name.' });
  }

  if (!['image/png', 'application/pdf'].includes(req.file.mimetype)) {
    return res.status(403).json({ error: 'Invalid file type.' });
  }

  const s3Params = {
    Bucket: process.env.S3_BUCKET,
    Key: req.body.username + '-' + req.file.originalname,
    ContentType: req.file.mimetype,
    Body: req.file.buffer,
  };

  s3.putObject(s3Params).promise()
  .then(data => {
    console.log('I AM ABOUT TO FIND THE USER', data, req.body.username);
     User.findOne({username: req.body.username})
    .then((user) => {
      user.resume = 'https://s3-us-west-2.amazonaws.com/mirathon/' + req.body.username + '-' + req.file.originalname;
      user.save((err, user) => {
        if (err) {
          console.log('Failed saving resume');
          res.json({failure: err})
        } else {
          console.log('Successfully saved resume');
          res.json({success: true})
        }
      })
    })
  })
  .catch(err => {
    console.log(err);
    res.status(403).json({ error: 'Not authorized.' });
  });
});

const Notification = models.Notification;
const Team = models.Team;
const Application = models.Application;



router.post('/add/experience', function(req, res) {
  var { company, startDate, endDate, role, description, location } = req.body;

  var experience = new WorkExperience({
    company, startDate, endDate, role, description, location
  })
  experience.save()
  .then(experience => {
    var newExperience = req.user.workExperience;
    newExperience.push(experience);
    req.user.workExperience = newExperience;
    req.user.save()
    .then(user => {
      res.json({success: true, experience});
    })
    .catch(err => {
      res.json({ success: false, message: 'invalid experience' });
    })
  })
  .catch(err => {
    console.log(err);
    res.json({ success: false, message: 'invalid experience' });
  })


});

router.post('/add/skill', function(req, res) {
  Skill.find({name: req.body.skill})
  .then(skills => {
    if (skills.length < 1) {
      var newSkill = new Skill({
        name: req.body.skill
      })
      newSkill.save()
      .then(skill => {
        var newSkills = req.user.skills;
        newSkills.push(skill);
        req.user.skills = newSkills;
        req.user.save()
        .then(user => {
          res.json({success: true, skill});
        })
        .catch(err => {
          res.json({ success: false, message: 'invalid skill' });
        })
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, message: 'skill failed to save'});
      })
    } else {
      var newSkills = req.user.skills;
      newSkills.push(skills[0]);
      req.user.skills = newSkills;
      req.user.save()
      .then(user => {
        res.json({success: true, skill: skills[0]});
      })
      .catch(err => {
        res.json({ success: false, message: 'invalid skill' });
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.json({ success: false, message: 'invalid skill' });
  })


});

router.post('/delete/skill', function(req, res) {
  var newSkills = req.user.skills();
  newSkills = newSkills.filter(skill => {
    return skill._id !== req.body.id;
  });
  req.user.skills = newSkills;
  req.user.save()
  .then(user => {
    res.json({success: true, skill: skill});
  })
  .catch(err => {
    res.json({ success: false, message: 'invalid skill' });
  })

});

router.post('/add/mainSkill', function(req, res) {
  Skill.findOne({name: req.body.skill})
  .then(skill => {
    if (!skill) {
      var newSkill = new Skill({
        name: req.body.skill
      })
      newSkill.save()
      .then(skill => {
        var newSkills = req.user.skills;
        newSkills.push(skill);
        req.user.skills = newSkills;
        var newMainSkills = req.user.mainSkills;
        newMainSkills.push({ name: skill.name, description: req.body.description });
        req.user.mainSkills = newMainSkills;
        req.user.save()
        .then(user => {
          res.json({success: true, mainSkill: {name: skill.name, description: req.body.description} });
        })
        .catch(err => {
          res.json({ success: false, message: 'invalid skill' });
        })
      })
      .catch(err => {
        console.log(err);
        res.json({success: false, message: 'skill failed to save'});
      })
    } else {
      var newSkills = req.user.skills.slice();
      newSkills.push(skill);
      req.user.skills = newSkills;
      var newMainSkills = req.user.mainSkills;
      newMainSkills.push({ name: skill.name, description: req.body.description });
      req.user.mainSkills = newMainSkills;
      req.user.save()
      .then(user => {
        res.json({success: true, mainSkill: {name: skill.name, description: req.body.description} });
      })
      .catch(err => {
        res.json({ success: false, message: 'invalid skill' });
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.json({ success: false, message: 'invalid skill' });
  })


});

router.post('/add/company', function(req, res) {
  const { title,
  startDate,
  endDate,
  company,
  club,
  description,
  location,
  applicationQuestions } = req.body;

  new Company({
    title,
    startDate,
    endDate,
    company,
    club,
    description,
    location,
    notifications: [],
    messages: [],
    teams: [],
    individuals: [],
    applications: [],
    applicationQuestions
  })
  .save()
  .then(company => {
    res.json({ success: true, company})
  })
  .catch(err => {
    res.json({success: false})
  })
});

router.post('/updateBasicInfo', function(req, res) {
  User.findById(req.user._id)
  .then(user => {
    user.fname = req.body.fname || user.fname;
    user.lname = req.body.lname || user.lname;
    user.about = req.body.about || user.about;
    user.university = req.body.university || user.university;
    user.major = req.body.major || user.major;
    user.year = req.body.year || user.year;
    user.interests = req.body.interests || user.interests;
    user.linkedin = req.body.linkedin || user.linkedin;
    user.website = req.body.website || user.website;
    user.resume = req.body.resume || user.resume;

    user.save()
    .then(user => {
      res.json({user})
    })
    .catch(err => {
      res.json(err)
    })
  })
  .catch(err => {
    res.json(err)
  })
});

router.get('/students', function(req, res) {
  User.find()
  .populate('competitions')
  .exec()
  .then(users => {
    const students = users.filter((user) => {
      return user.type === 'student'
    })
    .map(student => {
      return {fname: student.fname, lname: student.lname, username: student.username}
    })
    res.json({students})
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/companies', function(req, res) {
  if (req.user.type !== 'admin') {
    res.json({message: 'this is not allowed!!!!!'})
  } else {
    User.find()
    .populate('competitions')
    .exec()
    .then(users => {
      const companies = users.filter((user) => {
        return user.type === 'company'
      })
      res.json({companies})
    })
    .catch(err => {
      console.log(err);
    })
  }
})

router.get('/clubs', function(req, res) {
  if (req.user.type !== 'admin') {
    res.json({message: 'this is not allowed!!!!!'})
  } else {
    User.find()
    .populate('competitions')
    .exec()
    .then(users => {
      const clubs = users.filter((user) => {
        return user.type === 'club'
      })
      res.json({clubs})
    })
    .catch(err => {
      console.log(err);
    })
  }
})


router.get('/competitions', function(req, res) {
  if (req.user.type !== 'admin') {
    Competition.find()
    .populate('club')
    .populate('company')
    .exec()
    .then(competitions => {
      res.json({
        competitions: competitions
        .filter(competition => {
          return competition.approved
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
  } else {
    Competition.find()
    .populate('club')
    .populate('company')
    .exec()
    .then(competitions => {
      res.json({competitions})
    })
    .catch(err => {
      console.log(err);
    })
  }

})

router.get('/competition/:id', function(req, res) {
  Competition.findById(req.params.id)
  .populate('club')
  .populate('company')
  .populate('notifications')
  .populate('applications')
  .populate('teams')
  .exec()
  .then(competition => {
    console.log(competition);
    if (!competition || !competition.approved) {
      res.send('failed!')
    } else {
      res.json({
        competition: competition,
      })
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/team/:id', function(req, res) {
  Team.findById(req.params.id)
  .populate('members')
  .exec()
  .then(team => {
    if (!team) {
      res.send('failed!')
    } else {
      res.json({
        team
      })
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/application/:id', function(req, res) {
  Application.findById(req.params.id)
  .populate('team')
  .exec()
  .then(app => {
    if (!app) {
      res.send('failed!')
    } else {
      res.json({
        application: app
      })
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/add/competition', function(req, res) {
  if (req.user.type !== 'admin') {
    res.json({message: 'this is not allowed!!!!!'})
  } else {
    const {title,
    startDate,
    endDate,
    company,
    club,
    description,
    location,
    caseFile,
    applicationQuestions} = req.body;

    new Competition({
      title,
      startDate,
      endDate,
      company,
      club,
      description,
      location,
      caseFile,
      applicationQuestions,
      approved: true
    })
    .save()
    .then(competition => {
      res.json({
        competition
      })
      User.findById(company)
      .then(company => {
        if (company.competitions) {
          company.competitions.push(competition);
        } else {
          company.competitions = [competition];
        }
        company.save()
        .then(company => {
          console.log(company);
        })
      })
      User.findById(club)
      .then(club => {
        if (club.competitions) {
          club.competitions.push(competition);
        } else {
          club.competitions = [competition];
        }
        club.save()
        .then(club => {
          console.log(club);
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
})


router.post('/studentpic', function(req, res) {
  const pic = req.body.file;
  var formData = new FormData();
  formData.append(pic.name, pic);
})

router.post('/new/post', function(req,res) {
  Competition.findById(req.body.competition)
  .then(comp => {
    console.log(comp);
    if(!comp) {
      res.send('error')
    }
    new Notification({
      date: new Date(),
      text: req.body.text,
      poster: req.user,
      type: req.user.type
    })
    .save()
    .then(notification => {
      if(comp.notifications) {
        comp.notifications.push(notification)
      } else {
        comp.notifications = [notification]
      }
      comp.save()
      .then(comp => {
        console.log(notification);
        res.json({notification})
      })
    })
  })
  .catch(err => {
    res.send('error')
    console.log(err);
  })
})

router.post('/apply', function(req, res) {
  console.log(req.body.teammates);
  var members = Promise.all(req.body.teammates.map(teammate => {
    return User.findOne({username: teammate})
  }))
  .then(members => {
      members.push(req.user);
      Competition.findById(req.body.competition)
      .then(competition => {
        console.log(3.5);
        new Application({
          date: new Date(),
          responses: req.body.responses,
          team: members,
          approved: false
        })
        .save()
        .then(app => {
          console.log(4);
          competition.applications.push(app);
          competition.save()
          .then(comp => {
            console.log(5);
            res.json({competition: comp})
          })
          .catch(err => {
            res.json({err})
            console.log(err);
          })
        })
        .catch(err => {
          console.log(err);
          res.json({err})

        })

      })
      .catch(err => {
        console.log(err);
        res.json({err})
      })
  })
  .catch(err => {
    res.json({err})
  })

})

router.post('/temp/application/update', function(req, res) {
  var competitionApproved = false;
  req.user.competitions.map(comp => {
    if (comp._id.toString() === req.body.competition) {
      competitionApproved = true;
    }
  })
  if (!competitionApproved) {
    console.log('not auth');
    res.send('not authorized')
  } else {
    Application.findById(req.body.appId)
    .then(app => {
      app.tempApproved = req.body.tempApproved,
      app.tempRejected = req.body.tempRejected
      app.save()
      .then(app => {
        res.json({application: app})
      })
      .catch(err => {
        res.json({err})
        console.log(err);
      })
    })
    .catch(err => {
      res.json({err})
      console.log(err);
    })
  }

})

router.post('/accept/teams', function(req, res) {
  var competitionApproved = false;
  req.user.competitions.map(comp => {
    if (comp._id.toString() === req.body.compId) {
      competitionApproved = true;
    }
  })
  if (!competitionApproved) {
    console.log('not auth');
    res.send('not authorized')
  } else {
    Competition.findById(req.body.compId)
    .populate('applications')
    .exec()
    .then(comp => {
      Promise.all(comp.applications.map(app => {
        if (!app.approved && app.tempApproved) {
          new Team({
            members: app.team,
            name: 'idk',
            submissions: [],
            notifications: []
          })
          .save()
          .then(team => {
            comp.teams.push(team);
            comp.save()
            .then(comp => {
              console.log('success');
            })
            .catch(err => {
              console.log(err);
            })
          })
          .catch(err => {
            console.log(err);
          })
        }
        app.approved = app.tempApproved;
        return app.save()
      }))
      .then(applications => {
        res.send({competition: comp})
      })
      .catch(err => {
        console.log(err);
        res.send(err)
      })
    })
    .catch(err => {
      res.json({err})
      console.log(err);
    })
  }
})

module.exports = router;
