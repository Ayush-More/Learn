const express = require("express");
const chatController = require("../controller/chatController");
const authorization = require("../controller/authController");

const router = express.Router();

/* GET users listing. */
router
  .post("/create", authorization.protect, chatController.accessChat)
  .get("/all", authorization.protect, chatController.fetchChats);
module.exports = router;
