const express = require('express');
const usersRouter = express.Router();
const {isCompany,isAuth,isAdmin} = require("../../middlewares/auth")
const {register, login,getUsers,getOneUser,putUser, userProfile,deleteUser }= require("../controllers/user.controllers")

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getOneUser);
usersRouter.put("/updateuser/:id", putUser);
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.delete("/:id", deleteUser);


module.exports = usersRouter;