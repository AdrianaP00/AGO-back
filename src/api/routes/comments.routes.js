const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getComments,getOneComment,putComment,postComment,deleteComment}= require("../controllers/comments.controllers");


const commentRouter = express.Router();

commentRouter.get("/",[isAuth],[isAdmin],[isUser],[isCompany], getComments);
commentRouter.get("/:id",[isAuth],[isAdmin],[isUser],[isCompany], getOneComment)
commentRouter.post("/",[isAuth],[isAdmin],[isUser],[isCompany], postComment);
commentRouter.put("/:id",[isAuth],[isAdmin],[isUser],[isCompany], putComment);
commentRouter.delete("/:id",[isAdmin], deleteComment);

module.exports= commentRouter;