import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import {mpesaRoutes} from "./src/routes/mpesa.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/mpesa", mpesaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
