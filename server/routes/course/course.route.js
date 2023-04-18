const { getCourses, addCourse } = require("./course.controller");

const router = require("express").Router();

router.get("/", getCourses);
router.post("/", addCourse);

module.exports = { CourseRouter: router };
