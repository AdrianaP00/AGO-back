const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const { getCompanys, getCompany, postCompany, putCompany, deleteCompany } = require("../controllers/company.controllers");


const companyRoutes = express.Router();

companyRoutes.get("/",getCompanys);
companyRoutes.get("/:id",[isAuth],getCompany)
companyRoutes.post("/", [isCompany],postCompany);
companyRoutes.put("/:id",[isCompany], putCompany);
companyRoutes.delete("/:id",[isCompany], deleteCompany);

module.exports= companyRoutes;