const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getMaps,
  getMap,
  postMap,
  putMap,
  deleteMap,
} = require("../controllers/map.controllers");

const mapRoutes = express.Router();

mapRoutes.get("/", [isAuth], getMaps);
mapRoutes.get("/:id", [isAuth], getMap);
mapRoutes.post("/", [isCompany], postMap);
mapRoutes.put("/:id", [isCompany], putMap);
mapRoutes.delete("/:id", [isCompany], deleteMap);

module.exports = mapRoutes;
