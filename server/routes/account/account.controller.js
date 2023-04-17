const { Course } = require("../../models/course");
const { User } = require("../../models/user");

// account/:id
async function getAccount(req, res) {
  try {
    const { id } = req.params;

    if (!id) throw new Error("Id not found");

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "not found" });
    }

    return res.status(200).json({ user });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

// /account/:id/courses/add
async function registerCourse(req, res) {
  try {
    const { id } = req.params;

    const body = req.body.course;

    console.log(body);

    const user = await User.findById(id);

    if (!user || !id) {
      return res.status(404).json({ error: "not found" });
    }

    if (
      !body.code ||
      !body.num ||
      !body.name ||
      !body.description ||
      !body.credits
    ) {
      return res.status(400).json({ error: "invalid" });
    }

    const courseExists = user.courses.find((c) => {
      return JSON.stringify(c) === JSON.stringify(body);
    });

    if (courseExists) {
      console.log("exists", courseExists);
      return res.status(401).json({ error: "Already Enrolled" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $push: { courses: body } },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Successfully Enrolled", updatedUser });
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

async function removeCourse(req, res) {
  try {
    const { id } = req.params;

    const body = req.body.course;

    const user = await User.findById(id);

    if (!user || !id) {
      return res.status(404).json({ error: "not found" });
    }

    if (
      !body.code ||
      !body.num ||
      !body.name ||
      !body.description ||
      !body.credits
    ) {
      return res.status(400).json({ error: "invalid" });
    }

    const courseExists = user.courses.find((c) => {
      return JSON.stringify(c) === JSON.stringify(body);
    });

    if (!courseExists) {
      console.log("exists", courseExists);
      return res.status(404).json({ error: "course not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $pullAll: { courses: [body] } },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    if (err) res.json({ error: err.message });
  }
}

module.exports = { getAccount, registerCourse, removeCourse };
