const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getJobs,
  getJob,
  postJob,
  putJob,
  deleteJob,
} = require("../controllers/job.controllers");

const jobsRoutes = express.Router();

jobsRoutes.get("/", [isAuth], getJobs);
jobsRoutes.get("/:id", [isAuth], getJob);
jobsRoutes.post("/", [isCompany], postJob);
jobsRoutes.put("/:id", [isCompany], putJob);
jobsRoutes.delete("/:id", [isAdmin], deleteJob);

module.exports = jobsRoutes;
