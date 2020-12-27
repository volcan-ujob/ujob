var express = require("express");
var router = express.Router();
var { userModel } = require("../../DB/models/userModel.js");

router.route("/:id").get(function (req, res, next) {
  userModel.findById(req.params.id, (err, userfound) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json(userfound);
    }
  });
});

module.exports = router;
