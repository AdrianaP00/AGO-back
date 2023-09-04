const express = require("express");
const userRouter = express.Router();
const upload = require("../../middlewares/upload.file");

const {
  register,
  login,
  getUsers,
  getUser,
  putUser,
  deleteUser,
  confirmUser,
  putConfirmUser,
} = require("../controllers/user.controllers");

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
 *         phoneNumbe:
 *           type: number
 *           description: Users phone number
 *         address:
 *            type: string
 *            description: Users address
 *         spacialization:
 *            type: string
 *            description: Users spacialization
 *         yearsOfExperiencetype:
 *            type: number
 *            description: Users years of experiment
 * *       comments:
 *            type: array
 *            items:
 *            type: string
 *           uniqueItems: true
 *           description: Users comments
 *         jobs:
 *            type: array
 *            items:
 *            type: string
 *           uniqueItems: true
 *           description: Users jobs type
 *         role:
 *           type: string
 *           description: Users roles
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 *       example:
 *         name:Adry
 *         age: 23
 *         email: adriana00@gmail.com
 *         password: AdrianaP00!
 *         role: user
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
 *           $ref: '#/components/schemas/users'
 *           description: Users object
 *         token:
 *           type: string
 *           description: Valid Bearer token
 *       required:
 *         - user
 *         - token
 *       example:
 *         user:
 *         name:Adry
 *          age: 23
 *          email: adriana00@gmail.com
 *          password: AdrianaP00!
 *          role: user
 *          token: Adry123
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all Users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/users'
 *       500:
 *         description: Internal server error
 */
userRouter.get("/", getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtain information about a specific users by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific User by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/users'
 *       500:
 *         description: Internal server error
 */
userRouter.get("/:id", getUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Modify a specific User
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/users'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Modified Users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/users'
 *       500:
 *         description: Internal server error
 */
userRouter.put("/:id", upload.single("image"), putUser);

userRouter.put("/:id/confirm", putConfirmUser);

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new Users
 *     tags:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/users'
 *           examples:
 *             Autorized:
 *                 value:
 *                 name:Adry
 *                 age: 23
 *                 email: adriana00@gmail.com
 *                 password: AdrianaP00!
 *                 role: auth
 *             Company:
 *               value:
 *                 name: kain
 *                 age: 30
 *                 email: coach@disenador.com
 *                 password: Coach19!
 *                 role: company
 *             User:
 *               value:
 *                 name: Marco
 *                 age: 50
 *                 email: marco@disenador.com
 *                 password: Marco19!
 *                 role: user
 *
 *     responses:
 *       200:
 *         description: Created Users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/users'
 *       500:
 *         description: Internal server error
 */
userRouter.post("/register", register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/UsersLogIn'
 *           examples:
 *             Autorized:
 *               value:
 *                 email: autorized@disenador.com
 *                 password: Autorized19!
 *             Coach:
 *               value:
 *                 email: coach@disenador.com
 *                 password: Coach19!
 *     responses:
 *       200:
 *         description: User logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/UsersLogInRes'
 *       500:
 *         description: Internal server error
 */
userRouter.post("/login", login);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a specific Users by ID
 *     tags: [users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Users ID
 *     responses:
 *       200:
 *         description: Users deleted
 *       404:
 *         description: Id not found
 *       500:
 *         description: Internal server error
 */
userRouter.delete("/:id", deleteUser);

userRouter.get("/:id/confirm", confirmUser);

module.exports = userRouter;
