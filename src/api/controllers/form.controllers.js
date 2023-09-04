const Form = require("../models/form.models");
const User = require("../models/user.models")

const getForm = async (req, res) => {
  try {
    const Forms = await Form.find().populate("id_worker").populate("id_user");
    return res.status(200).json(Forms);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneForm= async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id).populate("id_worker").populate("id_user");
    return res.status(200).json(form);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const postForm= async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}



module.exports = { getForm, getOneForm, postForm};