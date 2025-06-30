import axios from "axios";
import moment from "moment";
import { generateToken } from "./MpesaToken.js";  // Correct import path
import dotenv from "dotenv";
dotenv.config();

const shortcode = process.env.MPESA_SHORTCODE || "174379"; // test paybill
const passkey = process.env.MPESA_PASSKEY;

export async function stkPush(phone, amount) {
  try {
    const token = await generateToken();

    const timestamp = moment().format("YYYYMMDDHHmmss");
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

    const payload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: "https://mydomain.com/api/mpesa/callback", // mock for now
      AccountReference: "GadgetDen",
      TransactionDesc: "Payment for goods at GadgetDen",
    };

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("STK Push Error:", err.response?.data || err.message);
    throw err;
  }
}
