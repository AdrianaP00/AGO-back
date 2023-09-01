const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getComments,getOneComment,putComment,postComment,deleteComment}= require("../controllers/comments.controllers");


const commentRouter = express.Router();

commentRouter.get("/",[isAuth], getComments);
commentRouter.get("/:id",[isAuth], getOneComment)
commentRouter.post("/",[isAuth], postComment);
commentRouter.put("/:id",[isAuth], putComment);
commentRouter.delete("/:id",[isAdmin], deleteComment);

module.exports= commentRouter;