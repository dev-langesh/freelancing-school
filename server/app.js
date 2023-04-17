const express = require("express");
const { CourseRouter } = require("./routes/course/course.route");
const { UserRouter } = require("./routes/user/user.route");
const { AccountRouter } = require("./routes/account/account.route");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/user", UserRouter);
app.use("/courses", CourseRouter);
app.use("/account", AccountRouter);

module.exports = { app };
