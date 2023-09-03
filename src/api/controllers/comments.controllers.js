const Comments = require("../models/comment.models")

const getComments = async (req, res) => {
    try {
      const allComments = await Comments.find().populate("user").populate("jobs").populate("company").populate("favoriteCompany");
      return res.status(200).json(allComments);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const getOneComment= async (req, res) => {
    try {
        const { id } = req.params
        const oneComments = await Comments.findById(id).populate("user").populate("jobs").populate("company").populate("favoriteCompany")
        return res.status(200).json(oneComments)

    } catch (error) {
        return res.status(500).json(error)
    }
}
const postComment = async (req, res) => {
    try {
        const newComment= new Comments(req.body)
        const createdComment = await newComment.save()
        const fullComment = await Comments.findById(createdComment._id)
        return res.status(201).json(fullComment)
    } catch (error) {
        return res.status(500).json(error)
    }
}


  
const putComment= async (req, res) => {
    try {
        const { id } = req.params
        const putComments= new Comments(req.body)
        putComments._id = id;
        const updateComments = await Comments.findByIdAndUpdate(id, putComments, { new: true })
        if (!updateComments) {
            return res.status(404).json({ message: "no existe un coach con este id" })
        }
        return res.status(200).json(updateComments)
    } catch (error) {
        return res.status(500).json(error)
    }
}


const deleteComment = async (req, res) => {
    try {
        const { id } = req.params
        const deleteComments = await Comments.findByIdAndDelete(id)
        if (!deleteComments) {
            return res.status(404).json({ message: "Ops! retry" })
        }
        return res.status(200).json(deleteComments)
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports={getComments,getOneComment,putComment,postComment,deleteComment}