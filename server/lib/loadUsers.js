const fs = require("fs").promises;
const path = require("path");
const { User } = require("../models/user");

async function loadUsers() {
  const user_count = await User.find({}).count();

  if (user_count === 0) {
    const data = await fs.readFile(
      path.join(__dirname, "..", "database", "users.json")
    );

    const users = await User.create(JSON.parse(data.toString()));

    console.log(users);
  }
}

module.exports = { loadUsers };
