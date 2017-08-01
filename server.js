const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./backend/routes');
const auth = require('./backend/routes/auth');

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
    store: new MongoStore({mongooseConnection: mongoose.connection})
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

/*
 * Add local strategy to the passport middleware
 */
passport.use(new LocalStrategy(function(username, password, done) {
    //SEARCH FOR A USER WITH THE GIVEN USERNAME
    User.findOne({ username: username }, function (err, user) {
      //IF THERE IS AN ERROR -- AUTHENTICATION FAILS
      if (err) {
        console.log(err);
        return done(err);
      }
      //IF NO USER IS PRESENT -- AUTHENTICATION FAILS
      if (!user) {
        console.log(user);
        return done(null, false, { message: 'Incorrect username.' });
      }
      //IF THE PASSWORDS DO NOT MATCH -- AUTHENTICATION FAILS
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      //AUTHENTICATION HAS SUCCEEDED
      return done(null, user);
    });
  }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/', auth(passport));
app.use('/', routes);

app.listen(process.env.PORT || 3000, function () {
  console.log('Backend server for Electron App running on port 3000!')
})