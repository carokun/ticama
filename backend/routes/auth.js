var express = require('express');
var router = express.Router();
var models = require('../models/models');
var User = models.User;

module.exports = function(passport) {

  router.post('/login', passport.authenticate('local'), function(req, res) {
    res.json({ success: true, user: req.user });
  });

  router.get('/logout', function(req, res) {
    req.logout();
    console.log('user', req.user);
    res.json({success: true});
  });

  router.get('/authenticate/user', function(req, res) {
    res.json({user: req.user});
  });

  router.post('/register', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var repeatPassword = req.body.repeatPassword;

    if (password !== repeatPassword) {
      res.json({ success: false, message: 'passwords do not match' });
    } else {
      var user = new User({
        username, password, email, fname, lname, university, year, major
      })
      user.save()
      .then(user => {
        res.json({success: true, user});
      })
      .catch(err => {
        res.json({ success: false, message: 'invalid registration' });
      })
    }

  });

  router.post('/register/student', function(req, res) {
    var { username, password, repeatPassword, email, fname, lname, university, year, major, about } = req.body;
    console.log('username', req.body.username);
    if (password !== repeatPassword) {
      res.json({ success: false, message: 'passwords do not match' });
    } else {
      var user = new User({
        username, password, email, fname, lname, university, year, major, type: 'student', about
      })
      user.save()
      .then(user => {
        res.json({success: true, user});
      })
      .catch(err => {
        console.log(err);
        res.json({ success: false, message: 'invalid registration' });
      })
    }

  });

  router.post('/register/company', function(req, res) {
    var { username, password, repeatPassword, email, name, about, website } = req.body;
    console.log('username', req.body.username);
    if (password !== repeatPassword) {
      res.json({ success: false, message: 'passwords do not match' });
    } else {
      var user = new User({
        username, password, email, name, about, website, type: 'company'
      })
      user.save()
      .then(user => {
        res.json({success: true, user});
      })
      .catch(err => {
        console.log(err);
        res.json({ success: false, message: 'invalid registration' });
      })
    }

  });

  router.post('/register/club', function(req, res) {
    var { username, password, repeatPassword, email, name, about, website } = req.body;
    console.log('username', req.body.username);
    if (password !== repeatPassword) {
      res.json({ success: false, message: 'passwords do not match' });
    } else {
      var user = new User({
        username, password, email, name, about, website, type: 'club'
      })
      user.save()
      .then(user => {
        res.json({success: true, user});
      })
      .catch(err => {
        console.log(err);
        res.json({ success: false, message: 'invalid registration' });
      })
    }

  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.json({success: true});
  });

  router.get('/user/:id', function(req, res) {
    User.findById(req.params.id)
    .populate('workExperience')
    .populate('skills')
    .populate('pastCompetitions')
    .then((user) => {
      console.log(user);
      res.json({user})
    })
    .catch(err => {
      res.json({err})
    })
  })

  return router;
};
