// src/routes/mpesa.js
import express from "express";
import { stkPush } from "../api/mpesa/stkPush.js";

const router = express.Router();

router.post("/stkpush", async (req, res) => {
  const { phone, amount } = req.body;
  try {
    const result = await stkPush(phone, amount);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "STK push failed." });
  }
});

export const mpesaRoutes = router;
