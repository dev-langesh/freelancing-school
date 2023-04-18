const { Course } = require("../../models/course");

async function getCourses(req, res) {
  try {
    const query = req.query;

    const courses = await Course.find(query);

    res.json(courses);
  } catch (err) {
    if (err) return res.json({ error: err.message });
  }
}

async function addCourse(req, res) {
  try {
    const body = req.body;

    const course = await Course.create(body);

    res.json(course);
  } catch (err) {
    if (err) return res.json({ error: err.message });
  }
}

module.exports = { getCourses, addCourse };
