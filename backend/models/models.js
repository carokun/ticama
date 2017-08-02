var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./User')
var Skill = require('./Skill')
var CompetitionExperience = require('./CompetitionExperience')
var WorkExperience = require('./WorkExperience')
var Competition = require('./Competition')
var Company = require('./Company')
var Club = require('./Club')

module.exports = {
  User,
  Skill,
  CompetitionExperience,
  WorkExperience,
  Competition,
  Company,
  Club
};
