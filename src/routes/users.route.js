const Router = require("express");
const router = new Router();

const UsersController = require("../controllers/users.controller");

router.get("/get_all", UsersController.getAll);
router.get("/get_one/:id", UsersController.getOne);
router.post("/signup/email", UsersController.signupEmail);
router.post("/signin/email", UsersController.signinEmail);