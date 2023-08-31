const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getJobs, getOneJobs,postJobs,putJobs,deleteJobs } = require("../controllers/jobs.controllers");


const jobsRoutes = express.Router();

jobsRoutes.get("/",[isAuth],[isAdmin],[isUser],[isCompany], getJobs);
jobsRoutes.get("/:id",[isAuth],[isAdmin],[isUser],[isCompany], getOneJobs)
jobsRoutes.post("/",[isAuth],[isAdmin],[isCompany],postJobs);
jobsRoutes.put("/:id",[isAuth],[isAdmin],[isCompany], putJobs);
jobsRoutes.delete("/:id",[isAdmin],deleteJobs);

module.exports= jobsRoutes;