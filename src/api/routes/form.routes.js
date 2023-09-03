const express = require("express");
const { getForm, getOneForm, postForm} = require("../controllers/Form.controllers");


const formRouter = express.Router();

formRouter.get("/",getForm);
formRouter.get("/:id",getOneForm)
formRouter.post("/",postForm);


module.exports= formRouter;