import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const totalAmount = location.state?.total ?? 0;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(totalAmount);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!totalAmount || totalAmount <= 0) {
      navigate("/cart");
    }
  }, [totalAmount, navigate]);

  const handlePayment = async () => {
    setError("");
    setSuccessMsg("");

    if (!phoneNumber.match(/^07\d{8}$/)) {
      setError("Enter a valid Kenyan phone number starting with 07 and 10 digits long.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError("Invalid payment amount.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/mpesa/stkpush", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber.replace(/^0/, "254"), // Convert 07X... to 2547X...
          amount: Number(amount),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(`STK Push sent to ${phoneNumber}. Check your phone to complete the payment.`);
      } else {
        setError(data.error || "Failed to initiate payment.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Pay with M-Pesa
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {successMsg && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMsg}
        </Alert>
      )}

      <TextField
        label="Phone Number"
        placeholder="07XXXXXXXX"
        fullWidth
        margin="normal"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        inputProps={{ maxLength: 10 }}
        helperText="Enter your M-Pesa linked phone number"
      />

      <TextField
        label="Amount (KES)"
        type="number"
        fullWidth
        margin="normal"
        value={amount}
        disabled
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </Box>
  );
}
