const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getMap, getOneMap,postMap,putMap,deleteMap }= require("../controllers/map.controllers");


const mapRoutes = express.Router();

mapRoutes.get("/",[isAuth], getMap);
mapRoutes.get("/:id",[isAuth], getOneMap)
mapRoutes.post("/",[isCompany],postMap);
mapRoutes.put("/:id",[isCompany], putMap);
mapRoutes.delete("/:id",[isCompany],deleteMap);

module.exports= mapRoutes;