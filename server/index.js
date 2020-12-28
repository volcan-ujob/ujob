const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var Post = require("../DB/models/companyPostModel");

// Post= require('../../server/models/companyPostModel');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routePost = require("./routers/postCmpRouter");
routePost(app);

//require('./routers/postCmpRouter')(app);

app.listen(PORT, () => {
  console.log("todo list RESTful API server started on: " + PORT);
});
