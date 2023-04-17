const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    code: String,
    num: String,
    name: String,
    credits: String,
    description: String,
  },
  {
    collection: "courses",
  }
);

const model = mongoose.model("course", schema);

module.exports = {
  Course: model,
};
