const mongoose = require("mongoose")

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: { type: String, requires: true, trim: true, minLength: [3, "El nombre necesita al menos 3 caracteres"], maxLength:[30, "Nombre demasiado largo, debe tener menos de 30 caracteres"]},
    age: { type: Number, requires: false},
    email: { type: String, required: true, trim: true, unique: true},
    password: { type: String, required: true, trim: true },
    phoneNumbe: { type: Number, required: false},
    address: { type: String, required: false},
    spacialization: { type: String, required: false},
    yearsOfExperience: { type: Number, required: false},
    comments: [{ type: Schema.ObjectId, required: false , ref: "comments" }],
    jobs: [{ type: Schema.ObjectId, required: false , ref: "jobs" }],
    role:{type:String, default:"user", enum:["Admin","user","Company"]},
    img:{ type: String, requires: false, default:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1693542647/proyecto%20final/userDefault.png"}
},{
    collection: "users"
}
)

const users = mongoose.model("users", usersSchema)
module.exports = users

