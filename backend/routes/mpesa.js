const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();

const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const shortcode = process.env.MPESA_SHORTCODE;
const passkey = process.env.MPESA_PASSKEY;
const callbackUrl = process.env.CALLBACK_URL; // Must be HTTPS and reachable via ngrok

// Get M-Pesa Access Token
async function getAccessToken() {
  try {
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      { headers: { Authorization: `Basic ${auth}` } }
    );
    return response.data.access_token;
  } catch (err) {
    console.error('Error getting access token:', err.response?.data || err.message);
    throw new Error('Failed to get access token');
  }
}

// STK Push endpoint
router.post('/stkpush', async (req, res) => {
  try {
    const { phone, amount } = req.body;

    if (!phone || !amount)
      return res.status(400).json({ error: 'Phone and amount are required' });

    const accessToken = await getAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64');

    const stkResponse = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: callbackUrl,
        AccountReference: 'Test123',
        TransactionDesc: 'Payment'
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    res.json(stkResponse.data);
  } catch (err) {
    console.error('STK Push error:', err.response?.data || err.message);

    // Send detailed error for frontend debugging
    const errorData = err.response?.data || { message: err.message };
    res.status(500).json({ error: errorData });
  }
});

// STK Push callback endpoint
router.post('/callback', (req, res) => {
  try {
    console.log('STK Callback received:', JSON.stringify(req.body, null, 2));
    // TODO: Save payment confirmation to your database here
    res.status(200).send('OK');
  } catch (err) {
    console.error('Callback error:', err.message);
    res.status(500).send('Callback processing failed');
  }
});

module.exports = router;
