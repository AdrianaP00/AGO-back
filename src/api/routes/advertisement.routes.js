const express = require("express");
const{ isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getAdvertisement,getOneAdvertisement,postAdvertisement,putAdvertisement,deleteAdvertisement} = require("../controllers/advertisement.controllers");


const advRoutes = express.Router();

advRoutes.get("/",[isAuth],getAdvertisement);
advRoutes.get("/:id",[isAuth], getOneAdvertisement)
advRoutes.post("/",[isAuth], postAdvertisement);
advRoutes.put("/:id",[isAuth], putAdvertisement);
advRoutes.delete("/:id",[isAuth],deleteAdvertisement);

module.exports= advRoutes;