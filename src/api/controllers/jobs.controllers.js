const Jobs = require("../models/jobs.models");

const getJobs= async (req, res) => {
    try {
      const allJobs = await Jobs.find();
      return res.status(200).json(allJobs);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const getOneJobs = async (req, res) => {
    try {
        const { id } = req.params
        const oneJob = await Jobs.findById(id)
        return res.status(200).json(oneJob)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const postJobs = async (req, res) => {
    try {
      const jobs = new Jobs(req.body);
      const createdjob= await jobs.save();
      return res.status(201).json(createdjob);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const putJobs= async (req, res) => {
    try {
        const { id } = req.params
        const putJobs = new Jobs(req.body)
        putJobs._id = id;
        const updateJobs= await Jobs.findByIdAndUpdate(id, putJobs, { new: true })
        if (!updateJobs) {
            return res.status(404).json({ message: "Oh no! we don't have this user" })
        }
        return res.status(200).json(updateJobs)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteJobs= async (req, res) => {
    try {
        const { id } = req.params
        const deletejob= await Jobs.findByIdAndDelete(id)
        if (!deletejob) {
            return res.status(404).json({ message: "Ops! retry" })
        }
        return res.status(200).json(deletejob)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports={getJobs, getOneJobs,postJobs,putJobs,deleteJobs }