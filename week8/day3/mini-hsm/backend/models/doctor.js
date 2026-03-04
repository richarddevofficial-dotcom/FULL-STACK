import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: String,
  contact: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Doctor", doctorSchema);
