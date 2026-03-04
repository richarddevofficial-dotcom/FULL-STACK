import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  contact: String,
  medicalHistory: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Patient", patientSchema);
