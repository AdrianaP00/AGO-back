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

const postForm = async (req, res) => {
  try {
    const { id, worker } = req.params
    const postForm = new Form(req.body)
    const post = await postForm.save()
    postForm._id = id;
    
    const foundUserW = await User.findById(worker)
    const foundUser = await User.findById(id)
 if(!foundUser){
  return res.status(404).json({message:"error de user2222"})
 }
 if(!foundUserW){
  return res.status(404).json({message:"error de gatooooooo"})
  
 }

 foundUser.id_user.push(post.id)
 foundUserW.id_worker.push(post.id)
    return res.status(200).json(updateForm)
} catch (error) {
    return res.status(500).json(error)
}
}



module.exports = { getForm, getOneForm, postForm};