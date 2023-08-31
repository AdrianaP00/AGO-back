const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const { getChats, getChat, postChat, putChat, deleteChat } = require("../controllers/chat.controllers");


const chatRouter = express.Router();

chatRouter.get("/", getChats);
chatRouter.get("/:id", getChat)
chatRouter.post("/", postChat);
chatRouter.put("/:id", putChat);
chatRouter.delete("/:id", deleteChat);

module.exports= chatRouter;