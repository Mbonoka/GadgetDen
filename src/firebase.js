import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// First Firebase project config
const firebaseConfig1 = {
  apiKey: "AIzaSyBlnQqIAY1KpU8WHLIGtSswnwq4gKXPAQY",
  authDomain: "gadgetden-admin-dashboard.firebaseapp.com",
  databaseURL: "https://gadgetden-admin-dashboard-default-rtdb.firebaseio.com",
  projectId: "gadgetden-admin-dashboard",
  storageBucket: "gadgetden-admin-dashboard.firebasestorage.app",
  messagingSenderId: "1076899431452",
  appId: "1:1076899431452:web:602a85209c25c812bfcbd9",
  measurementId: "G-R85FR5BJ3J"
};

// Second Firebase project config
const firebaseConfig2 = {
  apiKey: "AIzaSyATCGO_6QRmZoQ8W0l5PB9_BNkiyvqFTzM",
  authDomain: "myadminproject-31f70.firebaseapp.com",
  databaseURL: "https://myadminproject-31f70-default-rtdb.firebaseio.com",
  projectId: "myadminproject-31f70",
  storageBucket: "myadminproject-31f70.firebasestorage.app",
  messagingSenderId: "234868549437",
  appId: "1:234868549437:web:548663751b768294c754",
  measurementId: "G-WJJX7WKYS1"
};

// Initialize both apps with different names
const app1 = initializeApp(firebaseConfig1, "app1");
const app2 = initializeApp(firebaseConfig2, "app2");

// Export auth and database for both apps separately
export const auth1 = getAuth(app1);
export const database1 = getDatabase(app1);

export const auth2 = getAuth(app2);
export const database2 = getDatabase(app2);
