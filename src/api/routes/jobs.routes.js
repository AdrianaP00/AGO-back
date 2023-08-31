const express = require("express");
const { isUser, isAuth, isAdmin, isCompany } = require("../../middlewares/auth")
const {getJobs, getOneJobs,postJobs,putJobs,deleteJobs } = require("../controllers/jobs.controllers");


const jobsRoutes = express.Router();

jobsRoutes.get("/", getJobs);
jobsRoutes.get("/:id", getOneJobs)
jobsRoutes.post("/", postJobs);
jobsRoutes.put("/:id", putJobs);
jobsRoutes.delete("/:id", deleteJobs);

module.exports= jobsRoutes;