const express = require('express');
const router = express.Router();
const models = require('../models/models');
const WorkExperience = models.WorkExperience;
const Skill = models.Skill;
const Company = models.Company;
const User = models.User;

// API ROUTES HEREx

router.post('/basic/company/info', function(req, res) {
  console.log(req.user);
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


module.exports = router;
