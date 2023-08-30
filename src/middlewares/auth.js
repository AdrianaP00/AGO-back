const User = require("../api/models/user.models");
const {verifySign} = require("../utils/jwt");


const isAuth = async( req,res,next) =>{
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            return res.status(401).json({message:"no estas autorizado"})
        }
        const token = authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({message:"el token es invalido o no existe"})
        }
        const tokenVerified = verifySign(token);
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified)
        }
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;
        next()
    } catch (error) {
        return res.status(500).json(error)
    }
}


const isCompany = async( req,res,next) =>{
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            return res.status(401).json({message:"no estas autorizado como coach"})
        }
        const token = authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({message:"el token es invalido o no existe"})
        }
        const tokenVerified = verifySign(token);
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified)
        }
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;
        if (userLogged.role !== "coach") {
            return res.status(401).json({message:"no eres coach campeon"})
        }
        next()

    } catch (error) {
        return res.status(500).json(error)
    }
}

const isAdmin = async( req,res,next) =>{
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            return res.status(401).json({message:"no estas autorizado"})
        }
        const token = authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({message:"el token es invalido o no existe"})
        }
        const tokenVerified = verifySign(token);
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified)
        }
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;
        if (userLogged.role !== "admin") {
            return res.status(401).json({message:"no eres administrador campeon"})
        }
        next()

    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = {isCompany,isAuth,isAdmin}