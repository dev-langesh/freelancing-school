const mongoose = require("mongoose");

async function connectDb() {
  const db = await mongoose.connect(process.env.MONGO_URI);

  if (db) {
    console.log("connected");
  }
}

module.exports = { connectDb };
