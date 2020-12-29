const express = require("express");
var bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
var passporLocal = require("passport-local");
const cors = require("cors");
const db = require("../DB/index");

const app = express();

// const PORT = process.env.PORT || 3000;

// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// var Post = require("../DB/models/companyPostModel");

// // Post= require('../../server/models/companyPostModel');

// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/Tododb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routePost = require("./routers/postCmpRouter");
// routePost(app);

// //require('./routers/postCmpRouter')(app);

// app.listen(PORT, () => {
//   console.log("todo list RESTful API server started on: " + PORT);
// });

const port = 3000;
var passport = require("passport");
var auth = require("./routers/auth.js");
const cookieSession = require("cookie-session");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["azertyuiopqsdfghjkl"]
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
  })
);
app.use(
  cors({
    origin: "http://localhost:4200", // <-- location of the angular app were connecting to
    credentials: true
  })
);

app.use(cookieParser("secretcode"));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./routers/passportConfig")(passport);

app.use("/auth", auth);
////////////

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  userModel.findById({ _id: id }, (err, user) => {
    done(err, user);
  });
});
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const { userModel } = require("../DB/models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1045411814561-j7e9giknpj6b8a458kojr1foc2dnpame.apps.googleusercontent.com",
      clientSecret: "vkgpSPqtFAewhsFc2xlz7trB",
      callbackURL: "/auth/google/callback"
    },

    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      var obj = new userModel({
        googleId: profile.id,
        firstName: profile.name.familyName,
        lastName: profile.name.givenName,
        username: profile.displayName,
        email: " hello@gmail.com",
        password: "hugjgrjr"
      });
      userModel.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          new userModel({
            username: profile.displayName,
            googleId: profile.id,
            firstName: profile.name.familyName,
            lastName: profile.name.givenName
          })
            .save()
            .then((newUser) => {
              console.log("new user created: " + newUser);
            });
        }
      });
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.send(req.user);
    // Successful authentication, redirect home.
    // res.redirect("/");
  }
);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
