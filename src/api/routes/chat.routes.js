const express = require("express");
const { getChats, getChat, postChat, putChat, deleteChat } = require("../controllers/chat.controllers");


const chatRoutes = express.Router();

chatRoutes.get("/", getChats);
chatRoutes.get("/:id", getChat)
chatRoutes.post("/", postChat);
chatRoutes.put("/:id", putChat);
chatRoutes.delete("/:id", deleteChat);

module.exports= chatRoutes;