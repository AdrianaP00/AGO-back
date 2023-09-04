const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  title: { type: String, required: true },
  closed: { type: Boolean, default: false },
  user: [{ type: Schema.ObjectId, required: true, ref: "user" }],
  text: [
    { text: { type: String }, timestamps: { type: Date, default: Date.now() } },
  ],
});

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;
