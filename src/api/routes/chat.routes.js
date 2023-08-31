const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const { getChats, getChat, postChat, putChat, deleteChat } = require("../controllers/chat.controllers");


const chatRouter = express.Router();

chatRouter.get("/",[isAuth],[isAdmin],[isUser],[isCompany], getChats);
chatRouter.get("/:id",[isAuth],[isAdmin],[isUser],[isCompany], getChat)
chatRouter.post("/",[isAuth],[isAdmin],[isUser],[isCompany], postChat);
chatRouter.put("/:id",[isAuth],[isAdmin],[isUser],[isCompany], putChat);
chatRouter.delete("/:id",[isAuth],[isAdmin],[isUser],[isCompany],deleteChat);

module.exports= chatRouter;