const { onRequest } = require("firebase-functions/v2/https");

const logger = require("firebase-functions/logger");
app.use(cors({ origin: true }));

app.use(express.json()); 

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Firebase!",
  });   
})   

app.post("/payment/create", async (req, res) => {    
  const total = req.query.total;   
  
  // console.log("Payment Request Recieved for this amount >>> ", total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({ 
      amount: total,  
      currency: "usd",  
    }); 
    // console.log(paymentIntent);   

    res.status(201).json(paymentIntent);  
  } else {   
    res.status(403).json({  
      error: "Invalid amount",
    });
  }
});

exports.api = onRequest(app);
