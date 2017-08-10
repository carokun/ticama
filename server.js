const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./backend/routes');
const auth = require('./backend/routes/auth');
const company = require('./backend/routes/company');
//const api = require('./backend/routes/api')

const bodyParser = require('body-parser')

const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const User = require('./backend/models/models').User;
var session = require('express-session');

const MongoStore = require('connect-mongo/es5')(session);

const connect = process.env.MONGODB_URI;
mongoose.connect(connect);


app.use(bodyParser.json());

app.use(session(
  {
    secret: process.env.SECRET,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    saveUninitialized: false,
    resave: false
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
  .populate('workExperience')
  .populate('skills')
  .populate('pastCompetitions')
  .exec()
  .then(user => {
    done(null, user);
  })
  .catch(err => {
    done(err, false);
  })
});

/*
 * Add local strategy to the passport middleware
 */
passport.use(new LocalStrategy(function(username, password, done) {
    //SEARCH FOR A USER WITH THE GIVEN USERNAME
    User.findOne({ username: username })
    .populate('workExperience')
    .populate('skills')
    .populate('pastCompetitions')
    .exec()
    .then(user => {
      //IF NO USER IS PRESENT -- AUTHENTICATION FAILS
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      //IF THE PASSWORDS DO NOT MATCH -- AUTHENTICATION FAILS
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      //AUTHENTICATION HAS SUCCEEDED
      return done(null, user);
    })
    .catch(err => {
      //IF THERE IS AN ERROR -- AUTHENTICATION FAILS
      console.log(err);
      return done(err);
    })
  }
));

app.use(passport.initialize());
app.use(passport.session());

app.get('/api/authenticate/user', function(req, res) {
  res.json({user: req.user});
});

app.use('/api', auth(passport))
app.use('/api', routes)
app.use('/api', company)

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});
//
// app.use('/', auth(passport));
// app.use('/', routes);

app.listen(process.env.PORT || 3000, function () {
  console.log('Backend server for Mirathon App running on port 3000!')
})
