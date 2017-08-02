var express = require('express');
var router = express.Router();
var models = require('../models/models');
var User = models.User;

module.exports = function(passport) {

  router.post('/login', passport.authenticate('local'), function(req, res) {
    res.json({ success: true, user: req.user });
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
    var { username, password, repeatPassword, email, fname, lname, university, year, major } = req.body;
    console.log('username', req.body.username);
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
        username, password, email, name, about, website
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
        username, password, email, name, about, website
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

  return router;
};
