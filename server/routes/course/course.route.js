const { getCourses } = require("./course.controller");

const router = require("express").Router();

router.get("/", getCourses);

module.exports = { CourseRouter: router };
