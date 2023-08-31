const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: { type: String, requires: true, ref: "users"},
    user: { type: Schema.ObjectId, requires: true},
    company: [{type: Schema.ObjectId, requires: true, ref: "company"}],
    score: {type: Number, requires: true},
    jobs: [{ type: Schema.ObjectId, required: false , ref: "jobs" }],
    img:{ type: String, requires: false}
},{
    collection: "comments"
}
)

const comments = mongoose.model("comments", commentSchema)
module.exports = comments