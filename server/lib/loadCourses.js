const fs = require("fs").promises;
const path = require("path");
const { Course } = require("../models/course");

async function loadCourses() {
  const course_count = await Course.find({}).count();

  if (course_count === 0) {
    const data = await fs.readFile(
      path.join(__dirname, "..", "database", "courses.json")
    );

    const courses = await Course.create(JSON.parse(data.toString()));
  }
}

module.exports = { loadCourses };
