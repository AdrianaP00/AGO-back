const mongoose = require("mongoose")

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: { type: String, requires: true},
    age: { type: Number, requires: false},
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumbe: { type: Number, required: false},
    address: { type: String, required: false},
    spacialization: { type: String, required: false},
    yearsOfExperience: { type: Number, required: false},
    comments: [{ type: Schema.ObjectId, required: false , ref: "comments" }],
    jobs: [{ type: Schema.ObjectId, required: false , ref: "jobs" }],
    role:{type:String, default:"user", enum:["Admin","user","Company"]},
    img:{ type: String, requires: false}
},{
    collection: "users"
}
)

const users = mongoose.model("users", usersSchema)
module.exports = users

