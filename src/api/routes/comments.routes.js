const express = require("express");
const {getComments,getOneComment,putComment,postComment,deleteComment}= require("../controllers/comments.controllers");


const commentRouter = express.Router();

commentRouter.get("/", getComments);
commentRouter.get("/:id", getOneComment)
commentRouter.post("/", postComment);
commentRouter.put("/:id", putComment);
commentRouter.delete("/:id", deleteComment);

module.exports= commentRouter;