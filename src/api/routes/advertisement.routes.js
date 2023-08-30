const express = require("express");
const {getAdvertisement,getOneAdvertisement,postAdvertisement,putAdvertisement,deleteAdvertisement} = require("../controllers/advertisement.controllers");


const advRoutes = express.Router();

advRoutes.get("/", getAdvertisement);
advRoutes.get("/:id", getOneAdvertisement)
advRoutes.post("/", postAdvertisement);
advRoutes.put("/:id", putAdvertisement);
advRoutes.delete("/:id", deleteAdvertisement);

module.exports= advRoutes;