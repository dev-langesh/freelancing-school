const {
  getAccount,
  registerCourse,
  removeCourse,
} = require("./account.controller");

const router = require("express").Router();

router.get("/:id", getAccount);
router.post("/:id/courses/add", registerCourse);
router.patch("/:id/courses/remove", removeCourse);

module.exports = { AccountRouter: router };
