var mongoose = require("mongoose");
var Post = require("../models/companyPostModel");

exports.display_all_posts = function (req, res) {
  Post.find({}, function (err, posts) {
    if (err) res.send(err);
    res.json(posts);
  });
};

exports.create_post = function (req, res) {
  var new_post = new Post(req.body);
  new_post.save(function (err, post) {
    if (err) res.send(err);
    res.json(post);
  });
};

exports.display_one_post = function (req, res) {
  Post.findOneById(req.params.postId, function (err, postId) {
    if (err) res.send(err);
    rs.json(postId);
  });
};

exports.update_post = function (req, res) {
  Post.findOneAndUpdate(
    { _id: req.params.postId },
    req.body,
    function (err, post) {
      if (err) res.send(err);
      res.json(post);
    }
  );
};

exports.delete_post = function (req, res) {
  console.log(req.params.postId);
  Post.deleteOne({ _id: req.params.postId }, function (err, post) {
    if (err) res.send(err);
    res.json({ message: post });
  });
};
