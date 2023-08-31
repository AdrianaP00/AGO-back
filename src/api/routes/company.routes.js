const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const { getCompanys, getCompany, postCompany, putCompany, deleteCompany } = require("../controllers/company.controllers");


const companyRoutes = express.Router();

companyRoutes.get("/", getCompanys);
companyRoutes.get("/:id", getCompany)
companyRoutes.post("/", postCompany);
companyRoutes.put("/:id", putCompany);
companyRoutes.delete("/:id", deleteCompany);

module.exports= companyRoutes;