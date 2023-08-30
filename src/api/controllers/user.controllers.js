const users = require("../models/user.models")
const bcrypt = require("bcrypt");

const {generateSign} = require("../../utils/jwt")
const {validateEmail,validatePassword,usedEmail} = require("../../utils/validators")

const getUsers = async (req, res) => {
    try {
      const allUsers = await users.find();
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
        putCoachs._id = id;
        const updateUser = await user.findByIdAndUpdate(id, putUser, { new: true })
        if (!updateUser) {
            return res.status(404).json({ message: "Oh no! we don't have this user" })
        }
        return res.status(200).json(updateClass)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const register = async (req, res ) => {
    try {
        console.log(req.body);
        const newUser = new users(req.body)
        
        if (!validateEmail(newUser.email)) {
            return res.status(400).json({message:" email invalido"})
        }
        if (!validatePassword(newUser.password)) {
            return res.status(400).json({message:" password invalido"})
        }
        if (await usedEmail(newUser.email)) {
            return res.status(400).json({message:" email introducido ya existe"})
        }

        newUser.password = bcrypt.hashSync(newUser.password,10);
        const createdUser = await newUser.save();

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
            return res.status(404).json({ message: "Ops retry" })
        }
        return res.status(200).json(deleteCoach)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports={register, login,getUsers,getOneUser,putUser,deleteUser }