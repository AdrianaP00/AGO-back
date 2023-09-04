const express = require("express");
const {
  getForms,
  getForm,
  postForm,
} = require("../controllers/form.controllers");

const formRouter = express.Router();

formRouter.get("/", getForms);
formRouter.get("/:id", getForm);
formRouter.post("/:id/:worker", postForm);

module.exports = formRouter;
