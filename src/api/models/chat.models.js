const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    title: { type: String, required:true },
    closed: { type: Boolean, default: false },
    user: [{ type: Schema.ObjectId, required: true, ref: "user" }],
    conversation: [
      {
        text: { type: String, required: true, },
        timestamps: {type: Date}
      }
    ]
  }
);

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;
