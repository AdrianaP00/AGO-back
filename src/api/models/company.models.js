const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: { type: String, required: true },
    business_name: { type: String, required: true },
    vat: { type: String, required: true },
    direcction: { type: String },
    country: { type: String },
    logo: { type: String },
    numberEmployes: { type: Number },
    id_user: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const company = mongoose.model("company", companySchema);

module.exports = company;
