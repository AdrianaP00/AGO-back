const Form = require("../models/company.models");

const getForm = async (req, res) => {
  try {
    const Forms = await Form.find().populate("id_user");
    return res.status(200).json(Form);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneForm= async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id).populate("id_worker");
    return res.status(200).json(form);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postForm = async (req, res) => {
  try {
    const { id } = req.params
    const postForm = new Form(req.body)
    postForm._id = id;
    const updateForm= await Form.findByIdAndUpdate(id, postForm, { new: true })
    if (!updateCompany) {
        return res.status(404).json({ message: "Oh no! retry" })
    }
    return res.status(200).json(updateForm)
} catch (error) {
    return res.status(500).json(error)
}
}



module.exports = { getForm, getOneForm, postForm};