const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    username: String,
    password: String,
    courses: [],
  },
  {
    collection: "users",
  }
);

const model = mongoose.model("user", schema);

module.exports = {
  User: model,
};
