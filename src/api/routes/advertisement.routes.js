const express = require("express");
const{ isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getAdvertisement,getOneAdvertisement,postAdvertisement,putAdvertisement,deleteAdvertisement} = require("../controllers/advertisement.controllers");


const advRoutes = express.Router();

advRoutes.get("/",[isAuth],[isAdmin],[isUser],[isCompany],getAdvertisement);
advRoutes.get("/:id",[isAuth],[isAdmin],[isUser],[isCompany], getOneAdvertisement)
advRoutes.post("/",[isAuth],[isAdmin],[isCompany], postAdvertisement);
advRoutes.put("/:id",[isAuth],[isAdmin],[isCompany], putAdvertisement);
advRoutes.delete("/:id",[isAuth],[isAdmin],[isCompany],deleteAdvertisement);

module.exports= advRoutes;