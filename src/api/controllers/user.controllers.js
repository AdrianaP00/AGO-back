const users = require("../models/user.models")
const bcrypt = require("bcrypt");

const {generateSign} = require("../../utils/jwt")
const {validateEmail,validatePassword,usedEmail,validateName} = require("../../utils/validators")
  const { sendRegistrationEmail } = require("../../utils/mailer.config");

const getUsers = async (req, res) => {
    try {
      const allUsers = await users.find().populate("comments").populate("jobs");
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error);
    }
};

const getOneUser = async (req, res) => {
    try {
        const { id } = req.params
        const oneUser = await users.findById(id)
        return res.status(200).json(oneUser)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const putUser = async (req, res) => {
    try {
        const { id } = req.params
        const putUser = new users(req.body)
        putUser._id = id;
        const updateUser = await users.findByIdAndUpdate(id, putUser, { new: true })
        if (!updateUser) {
            return res.status(404).json({ message: "Oh no! we don't have this user" })
        }
        if (!validatePassword(updateUser.password)) {
            return res.status(400).json({message:"invalid password"})
        }
        putUser.password = bcrypt.hashSync(putUser.password,10);
        const update = await putUser.updateOne();
        return res.status(200).json(update,updateUser)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const register = async (req, res ) => {
    try {
        console.log(req.body);
        const newUser = new users(req.body)

        if (!validateName(newUser.name)) {
            return res.status(400).json({message:"invalid name"})
        }
        if (!validateEmail(newUser.email)) {
            return res.status(400).json({message:" invalid email address"})
        }
        if (!validatePassword(newUser.password)) {
            return res.status(400).json({message:"invalid password"})
        }
        if (await usedEmail(newUser.email)) {
            return res.status(400).json({message:"the email already exists"})
        }
        newUser.password = bcrypt.hashSync(newUser.password,10);
        const createdUser = await newUser.save();
        sendRegistrationEmail(newUser);

        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const login = async (req, res) => {
    try {
        console.log(req.body.email);
        const userInfo = await users.findOne({email:req.body.email})
        console.log(userInfo);
        if (!userInfo) {
            return res.status(404).json({message:"incorrect email address"})
        }
        if (!bcrypt.compareSync(req.body.password,userInfo.password)) {
            return res.status(404).json({message:"incorrect password"})
        }
       const token = generateSign(userInfo._id,userInfo.email);

       return res.status(200).json({user:userInfo,token:token})

    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleteUser = await users.findByIdAndDelete(id)
        if (!deleteUser) {
            return res.status(404).json({ message: "Ops! retry" })
        }
        return res.status(200).json(deleteUser)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports={register, login,getUsers,getOneUser,putUser,deleteUser }