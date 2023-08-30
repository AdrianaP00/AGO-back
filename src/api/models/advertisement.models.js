const mongoose = require("mongoose")

const Schema = mongoose.Schema

const advertisementSchema = new Schema({
    title: { type: String, requires: true},
    company: { type: String, requires: true},
    description: { type: Number, requires: true},
    salary: { type: String, required: true },
    extra: { type: String, required: false },
    localization: { type: String, required: true},
    skills: { type: String, required: true},
    users: [{ type: Schema.ObjectId, required: false , ref: "users" }],
    jobs: [{ type: Schema.ObjectId, required: false , ref: "jobs" }],
    img:{ type: String, requires: false}

},{
    collection: "advertisement"
}
)

const advertisement = mongoose.model("advertisement", advertisementSchema)
module.exports = advertisement