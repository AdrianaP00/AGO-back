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
 *         comments:
 *            type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: Users comments
 *         jobs:
 *           type: array
 *           items:
 *             type: string
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
 *         name: Construcciones Martínez
 *         age: 42
 *         email: info@construccionesmartinez.com
 *         password: password123
 *         phoneNumber: +34-934-567-890
 *         address: Calle Principal, 123, Barcelona
 *         yearsOfExperience: 2005-03-15T00:00:00.000+00:00
 *         specialization: []
 *         contacts: []
 *         comments: []
 *         img: https://example.com/img1.jpg
 *         role: ROLE_COMPANY
 *         companyTypes: ["SL"]
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
 *           name: Adry
 *         token: Adry123
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: All Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
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
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
userRouter.get("/:id", getUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Modify a specific User 
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Modified User
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       400:
 *         description: Invalid password formating
 *       404:
 *         description: Oh no! we don't have this user
 *       500:
 *         description: Internal server error
 */
userRouter.put("/:id", upload.single("image"), putUser);

/**
 * @swagger
 * /users/{id}/confirm:
 *   put:
 *     summary: Confirm a specific User 
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Confirmed User
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
userRouter.put("/:id/confirm", putConfirmUser);

/**
 * @swagger
 * /users/{id}/confirm:
 *   get:
 *     summary: Confirm a specific User 
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Confirmed User
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error
 */
userRouter.get("/:id/confirm", confirmUser);

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new User
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *           examples:
 *             Autorized:
 *               value:
 *                 name: Abel
 *                 age: 30
 *                 email: autorized@disenador.com
 *                 password: Autorized19!
 *                 courses: ["64df8cadb94ecb4dc11c4ba6","64df8cadb94ecb4dc11c4ba7"]
 *                 role: user
 *     name: "Construcciones Martínez",
    age: 42,
    email: "info@construccionesmartinez.com",
    password: "password123",
    phoneNumber: "+34-934-567-890",
    address: "Calle Principal, 123, Barcelona",
    yearsOfExperience: "2005-03-15T00:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "https://example.com/img1.jpg",
    role: "ROLE_COMPANY",
    companyTypes: ["SL"],
 *             Coach:
 *               value:
 *                 name: kain
 *                 age: 30
 *                 email: coach@disenador.com
 *                 password: Coach19!
 *                 courses: ["64df8cadb94ecb4dc11c4ba6","64df8cadb94ecb4dc11c4ba7"]
 *                 role: coach
 *   name: "Andrés Pérez",
    age: 28,
    email: "andres.perez@example.com",
    password: "password12345678901234",
    role: "ROLE_USER",
    phoneNumber: "+34-901-234-567",
    address: "Calle de la Montaña, 8, Valencia",
    yearsOfExperience: "2016-05-02T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
 *     responses:
 *       200:
 *         description: Created Users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       400:
 *         description: invalid name/invalid email address/invalid password/the email already exists
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
 *       404:
 *         description: incorrect email address/incorrect password
 *       500:
 *         description: Internal server error
 */
userRouter.post("/login", login);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a specific User by ID
 *     tags: [Users]
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


module.exports = userRouter;
