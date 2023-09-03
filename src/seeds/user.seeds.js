const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Users = require("../api/models/user.models");
// import { userDataForSeeds } from "../dbs/user.db"

const usersArray = [
        // Users with 'user' role
        { name: 'User 1', age: 25, email: 'user1@example.com', password: 'password1', role: 'ROLE_USER' },
        { name: 'User 2', age: 30, email: 'user2@example.com', password: 'password2', role: 'ROLE_USER' },
        { name: 'User 3', age: 28, email: 'user3@example.com', password: 'password3', role: 'ROLE_USER' },
        { name: 'User 4', age: 22, email: 'user4@example.com', password: 'password4', role: 'ROLE_USER' },
        { name: 'User 5', age: 29, email: 'user5@example.com', password: 'password5', role: 'ROLE_USER' },
        
        // Users with 'Company' role
        { name: 'Company 1', age: 40, email: 'company1@example.com', password: 'password6', role: 'ROLE_COMPANY' },
        { name: 'Company 2', age: 35, email: 'company2@example.com', password: 'password7', role: 'ROLE_COMPANY' },
        { name: 'Company 3', age: 32, email: 'company3@example.com', password: 'password8', role: 'ROLE_COMPANY' },
        { name: 'Company 4', age: 45, email: 'company4@example.com', password: 'password9', role: 'ROLE_COMPANY' },
        { name: 'Company 5', age: 50, email: 'company5@example.com', password: 'password10', role: 'ROLE_COMPANY' },
    ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allUsers = await Users.find();
    if (allUsers.length > 0) {
        await Users.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const usersMap = usersArray.map((user) => new Users(user));
    
// Necesitamos hashear la contraseña incluso cuando se hace el seeds psra que aparezcan como comtraseñas raras
    // const usuariosArray = usuariosData.map((user) => {
    //     const encryptedPassword = bcrypt.hashSync(user.password, 10);
    //     const newUser = {
    //       ...user,
    //       password: encryptedPassword,
    //     };
    //     return new Users(newUser);
    //   });

    await Users.insertMany(usersMap);
    console.log("ok");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())