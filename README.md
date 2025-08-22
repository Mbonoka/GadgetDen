# React + Vite

GadgetDen Backend – M-Pesa STK Push Integration

This repository contains the backend for the GadgetDen project, including a fully working M-Pesa STK Push integration for payments. The backend is built with Node.js, Express, and Socket.io, and connects to M-Pesa sandbox APIs for secure mobile payments.

Features

Accept payments via M-Pesa STK Push.

Logs STK Push callbacks to the backend.

Handles errors gracefully and returns descriptive messages.

Supports local development using ngrok for webhook callback URLs.

Other routes for gadgets, authentication, and notifications.

Prerequisites

Node.js v18+ and npm installed

Ngrok account (free)

M-Pesa sandbox credentials (Consumer Key, Consumer Secret, Shortcode, Passkey)

MongoDB or any database (optional, if you store transactions)

Installation

Clone the repository:

git clone https://github.com/yourusername/gadgetden-backend.git
cd gadgetden-backend


Install dependencies:

npm install


Create a .env file in the root folder:
PORT=5000
MPESA_CONSUMER_KEY=YourConsumerKeyHere
MPESA_CONSUMER_SECRET=YourConsumerSecretHere
MPESA_SHORTCODE=174379
MPESA_PASSKEY=YourPasskeyHere
CALLBACK_URL=https://your-ngrok-url/api/mpesa/callback


Note: CALLBACK_URL must be HTTPS, reachable by M-Pesa, and include /api/mpesa/callback.
Running the Backend
Start the backend server:
nodemon server.js

Start ngrok to expose your local server to the internet:

ngrok http 5000


Copy the HTTPS URL from ngrok and update your .env file as CALLBACK_URL.

Routes
1. M-Pesa STK Push

POST /api/mpesa/stkpush

Body:

{
  "phone": "2547XXXXXXXX",
  "amount": 100
}


Response:

{
  "MerchantRequestID": "12345",
  "CheckoutRequestID": "abcde",
  "ResponseCode": "0",
  "ResponseDescription": "Success. Request accepted for processing",
  "CustomerMessage": "Success. Request accepted for processing"
}

2. M-Pesa Callback

POST /api/mpesa/callback

Receives M-Pesa transaction status after user completes payment.

Example body logged to console:

{
  "Body": {
    "stkCallback": {
      "MerchantRequestID": "...",
      "CheckoutRequestID": "...",
      "ResultCode": 0,
      "ResultDesc": "The service request is processed successfully.",
      "CallbackMetadata": { ... }
    }
  }
}


You can store this in your database for payment verification.

Frontend Integration (React)

Send a POST request to /api/mpesa/stkpush with phone number and amount.

Convert Kenyan phone numbers from 07XXXXXXXX to 2547XXXXXXXX.

Display success or error messages from backend.

Important Notes

Always use HTTPS URLs for M-Pesa callbacks.

Sandbox credentials do not work on production.

Ngrok URL changes every session; update .env each time during testing.

Use descriptive console logs for debugging STK Push and callbacks.

Tech Stack

Backend: Node.js, Express

Payment Gateway: Safaricom M-Pesa (STK Push Sandbox)

Real-time Communication: Socket.io

Frontend (example): React.js with MUI

Troubleshooting

400.002.02 Invalid CallBackURL:
Ensure ngrok URL is HTTPS, includes /api/mpesa/callback, and your backend is running.

Server Errors (500):
Check your M-Pesa credentials, timestamp, and password encoding.

Frontend JSON errors:
Wrap objects with JSON.stringify() when displaying in React alerts.
