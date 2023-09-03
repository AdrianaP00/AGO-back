const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Form = require("../api/models/form.models");

const formArray = [

]

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allMap = await Form.find();
    if (allMap.length > 0) {
        await Form.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const formMap = formArray.map((form) => new Form(map));
    await Form.insertMany(formMap);
    console.log("ok");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())