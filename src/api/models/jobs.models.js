const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true },
    hourSalary: { type: Number, required: true }
  }
);

const jobs = mongoose.model("jobs", jobsSchema);

module.exports = jobs;