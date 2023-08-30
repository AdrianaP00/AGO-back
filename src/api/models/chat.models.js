const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    title: { type: String, required:true },
    closed: { type: Boolean, default: false },
    text: [
      {
        id_user: { type: Schema.ObjectId, required: true, ref: "user", require: false  },
        text: { type: String },
      },
      {
        timestamps: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;
