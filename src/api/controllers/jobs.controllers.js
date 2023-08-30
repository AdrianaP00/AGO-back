const jobs = require("../models/jobs");

const getJobs= async (req, res) => {
    try {
      const allJobs = await jobs.find();
      return res.status(200).json(allJobs);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const getOneJobs = async (req, res) => {
    try {
        const { id } = req.params
        const oneJob = await jobs.findById(id)
        return res.status(200).json(oneJob)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const postJobs = async (req, res) => {
    try {
      const jobs = new jobs(req.body);
      const createdjob= await jobs.save();
      return res.status(201).json(createdjob);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const putJobs= async (req, res) => {
    try {
        const { id } = req.params
        const putJobs = new users(req.body)
        putJobs._id = id;
        const updateJobs= await users.findByIdAndUpdate(id, putJobs, { new: true })
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
        const deletejob= await jobs.findByIdAndDelete(id)
        if (!deletejob) {
            return res.status(404).json({ message: "Ops! retry" })
        }
        return res.status(200).json(deletejob)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports={getJobs, getOneJobs,postJobs,putJobs,deleteJobs }