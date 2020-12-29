var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var companyPostSchema = new Schema({
  details: {
    type: String
  }
});
module.exports = mongoose.model("Post", companyPostSchema);
