const express = require("express");

const Router = express.Router();
const calenderController = require("../controller/calenderController");
const authController = require("../controller/authController");

Router.use(authController.protect);

Router.get("/month/:year/:month", calenderController.monthEvent)
  .get("/day/:year/:month/:day", calenderController.dayEvent)
  .post("/day/:year/:month/:day/new", calenderController.createEvent);

module.exports = Router;
