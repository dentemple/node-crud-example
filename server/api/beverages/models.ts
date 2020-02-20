import mongoose from "mongoose";

const Schema = mongoose.Schema;

/* name, container_units, price_per_unit, size, size_measurement, special_offer */
const model = new Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  // ---
  container_units: { type: String },
  price_per_unit: { type: Number },
  size: { type: Number },
  size_measurement: { type: String },
  special_offer: { type: String }
});

const Beverages = mongoose.model("Beverages", model);

export default Beverages;
