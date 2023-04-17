const http = require("http");
const { app } = require("./app");
const { loadCourses } = require("./lib/loadCourses");
const { loadUsers } = require("./lib/loadUsers");
const { connectDb } = require("./lib/connectDb");
const { UserRouter } = require("./routes/user/user.route");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

connectDb();

loadCourses();
loadUsers();

server.listen(PORT, () => console.log(`Servier is running at ${PORT}`));
