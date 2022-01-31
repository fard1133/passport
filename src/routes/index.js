const Router = require("express");
const router = new Router();

const usersRoute = require("./users.route")

router.use("/users", usersRoute)