const express = require('express');
const router = express.Router();
const models = require('../models/models');
const WorkExperience = models.WorkExperience;
const Skill = models.Skill;
const Company = models.Company;
const User = models.User;
const Competition = models.Competition;


// API ROUTES HERE

router.post('/basic/company/info', function(req, res) {
  console.log(req.user);
  User.findById(req.user._id)
  .then(user => {
    user.about = req.body.about || user.about;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.website = req.body.website || user.website;
    user.industry = req.body.industry || user.industry;

    user.save()
    .then(user => {
      console.log(user);
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

router.post('/request/competition', function(req, res) {
  new Competition(Object.assign({}, req.body.competition, {approved: false, company: req.user._id}))
  .save()
  .then(competition => {
    if (req.user.competitions) {
      req.user.competitions.push(competition);
    } else {
      req.user.competitions = [competition];
    }
    req.user.save()
    .then(user => {
      res.json({success: true})
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
});


module.exports = router;
