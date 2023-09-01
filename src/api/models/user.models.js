const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, requires: true, trim: true, minLength: [3, "El nombre necesita al menos 3 caracteres"], maxLength:[30, "Nombre demasiado largo, debe tener menos de 30 caracteres"]},
    age: { type: Number, requires: false},
    email: { type: String, required: true, trim: true, unique: true},
    password: { type: String, required: true, trim: true },
    phoneNumber: { type: Number, required: false},
    address: { type: String, required: false},
    spacialization: { type: String, required: false},
    yearsOfExperience: { type: Number, required: false},
    comments: [{ type: Schema.ObjectId, required: false , ref: "comment" }],
    jobs: [{ type: Schema.ObjectId, required: false , ref: "job" }],
    role:{type:String, default:"ROLE_USER", enum:["ROLE_USER","ROLE_COMPANY","ROLE_ADMIN"]},
    img:{ type: String, requires: false, default:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1693542647/proyecto%20final/userDefault.png"}
},{
    collection: "user"
}
)

const user = mongoose.model("user", userSchema)
module.exports = user

