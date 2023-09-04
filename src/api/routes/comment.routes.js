const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getComments,
  getComment,
  putComment,
  postComment,
  deleteComment,
} = require("../controllers/comment.controllers");

const commentRouter = express.Router();

commentRouter.get("/", [isAuth], getComments);
commentRouter.get("/:id", [isAuth], getComment);
commentRouter.post("/", [isAuth], postComment);
commentRouter.put("/:id", [isAuth], putComment);
commentRouter.delete("/:id", [isAdmin], deleteComment);

module.exports = commentRouter;
