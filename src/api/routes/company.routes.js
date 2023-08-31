const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const { getCompanys, getCompany, postCompany, putCompany, deleteCompany } = require("../controllers/company.controllers");


const companyRoutes = express.Router();

companyRoutes.get("/",[isAuth],[isAdmin],[isUser],[isCompany],getCompanys);
companyRoutes.get("/:id",[isAuth],[isAdmin],[isUser],[isCompany],getCompany)
companyRoutes.post("/", [isCompany],[isAdmin],postCompany);
companyRoutes.put("/:id",[isCompany],[isAdmin], putCompany);
companyRoutes.delete("/:id",[isCompany],[isAdmin], deleteCompany);

module.exports= companyRoutes;