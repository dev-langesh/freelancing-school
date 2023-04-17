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

module.exports = { getCourses };
