const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    hours: { type: Date, required: true },
    email: { type: String, required: true },
    note: { type: String },
    specialization: [{ type: String, required: false}],
    id_user: { type: Schema.ObjectId, required: true, ref:"user" },
    id_worker: [{ type: Schema.ObjectId, required: true, ref:"user" }]
  },
);

const Form = mongoose.model("form", formSchema);

module.exports = Form;