const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getJobs, getOneJobs,postJobs,putJobs,deleteJobs } = require("../controllers/jobs.controllers");


const jobsRoutes = express.Router();

jobsRoutes.get("/",[isAuth], getJobs);
jobsRoutes.get("/:id",[isAuth], getOneJobs)
jobsRoutes.post("/",[isCompany],postJobs);
jobsRoutes.put("/:id",[isCompany], putJobs);
jobsRoutes.delete("/:id",[isAdmin],deleteJobs);

module.exports= jobsRoutes;