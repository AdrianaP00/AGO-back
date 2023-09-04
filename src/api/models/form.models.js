const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    hours: { type: Date, required: true },
    email: { type: String, required: false },
    note: { type: String, required: true},
    direction: { type: String, required: false},
  },
);

const Form = mongoose.model("form", formSchema);

module.exports = Form;