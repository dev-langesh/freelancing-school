const mongoose = require("mongoose");
const { User } = require("../../models/user");

async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error("Fill all the fields");
    }

    const usernameTaken = await User.findOne({ username });

    if (usernameTaken) {
      return res.status(409).json({ error: "username already taken" });
    }

    const user = await User.create({ username, password });

    return res.status(201).json({ userId: user._id });
  } catch (err) {
    if (err) return res.json({ error: err.message });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error("Fill all the fields");
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.status(200).json({ userId: user._id });
  } catch (err) {
    if (err) return res.json({ error: err.message });
  }
}

module.exports = { registerUser, login };
