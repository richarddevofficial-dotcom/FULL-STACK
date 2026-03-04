import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // allow frontend
app.use(express.json());

let patients = [];

app.post("/api/patients", (req, res) => {
  console.log("Received patient:", req.body); // check console!
  patients.push(req.body);
  res.json({ success: true, patient: req.body });
});

app.get("/api/patients", (req, res) => {
  res.json(patients);
});

app.listen(5000, () => console.log("Server running on port 5000"));
