const express = require('express');
const usersRouter = express.Router();
const {isCompany,isAuth,isAdmin,isUser} = require("../../middlewares/auth")
const {register, login,getUsers,getOneUser,putUser,deleteUser }= require("../controllers/user.controllers")

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Users name
 *         age:
 *           type: number
 *           description: Users age
 *         email:
 *           type: string
 *           description: Users email
 *         password:
 *           type: string
 *           description: Users password
 *         courses:
 *           type: array
 *           items:
 *             type: string
 *           uniqueItems: true
 *           description: Users classes
 *         role:
 *           type: string
 *           description: Users roles
 *       required:
 *         - name
 *         - age
 *         - email
 *         - password
 *         - courses
 *         - role
 *       example:
 *         name: Jose
 *         age: 50
 *         email: Jose@diseñador.com
 *         password: Jose123
 *         courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba6"]
 *         role: coach
 *     UsersLogIn:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Users email
 *         password:
 *           type: string
 *           description: Users password
 *       required:
 *         - email
 *         - password
 *     UsersLogInRes:
 *       type: object
 *       properties:
 *         user:
 *           type: object
 *           $ref: '#/components/schemas/Users'
 *           description: Users object
 *         token:
 *           type: string
 *           description: Valid Bearer token
 *       required:
 *         - user
 *         - token
 *       example:
 *         user: 
 *           name: Jose
 *           age: 50
 *           email: Jose@diseñador.com
 *           password: Jose123
 *           courses: ["64df8cadb94ecb4dc11c4ba7","64df8cadb94ecb4dc11c4ba6"]
 *           role: coach
 *         token: Jose123
 */
usersRouter.get('/', getUsers);
usersRouter.get('/:id', getOneUser);
usersRouter.put("/updateuser/:id", putUser);
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.delete("/:id", deleteUser);


module.exports = usersRouter;