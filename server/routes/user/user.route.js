const { registerUser, login } = require("./user.controller");

const router = require("express").Router();

router.post("/signup", registerUser);
router.post("/login", login);

module.exports = { UserRouter: router };
