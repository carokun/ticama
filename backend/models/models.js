var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./User')
var Skill = require('./Skill')
var CompetitionExperience = require('./CompetitionExperience')
var WorkExperience = require('./WorkExperience')
var Competition = require('./Competition')

module.exports = {
  User,
  Skill,
  CompetitionExperience,
  WorkExperience,
  Competition
};
