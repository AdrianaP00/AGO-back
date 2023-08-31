const express = require("express");
const {getJobs, getOneJobs,postJobs,putJobs,deleteJobs } = require("../controllers/jobs.controllers");


const jobsRoutes = express.Router();

jobsRoutes.get("/", getJobs);
jobsRoutes.get("/:id", getOneJobs)
jobsRoutes.post("/", postJobs);
jobsRoutes.put("/:id", putJobs);
jobsRoutes.delete("/:id", deleteJobs);

module.exports= jobsRoutes;