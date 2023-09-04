const express = require("express");
const { getForm, getOneForm, postForm} = require("../controllers/form.controllers");


const formRouter = express.Router();

formRouter.get("/",getForm);
formRouter.get("/:id",getOneForm)
formRouter.post("/:id/:worker",postForm);


module.exports= formRouter;