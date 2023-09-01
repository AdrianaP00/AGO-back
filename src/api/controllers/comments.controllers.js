const Comments = require("../models/comments.models")

const getComments = async (req, res) => {
    try {
      const allComments = await Comments.find();
      return res.status(200).json(allComments);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const getOneComment= async (req, res) => {
    try {
        const { id } = req.params
        const oneComments = await Comments.findById(id).populate("users")
        return res.status(200).json(oneComments)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const postComment = async (req, res) => {
    try {
         const newComment = new Comment({
            ...req.body,
            userId: req.user._id,
        });
        const createComment = await newComment.save();
        return res.status(201).json(createComment);
    
    } catch (error) {
       return res.status(500).json(error)
    }
}


const putComment= async (req, res) => {
    try {
        const { id } = req.params
        const putComments = new Comments(req.body)
        putComments._id = id;
        const updateComments= await Comments.findByIdAndUpdate(id, putComments, { new: true })
        if (!updateComments) {
            return res.status(404).json({ message: "Oh no! retry" })
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