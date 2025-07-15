const { onRequest } = require("firebase-functions/v2/https");

const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");

const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Firebase!",
  });
});

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "Payment amount must be greater than zero",
    });
  }
});

exports.api = onRequest(app);
