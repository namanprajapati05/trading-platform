const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();



const authenticate = require("./middleware/authenticate")
const userRoutes = require("./routes/user");
const positionRoutes = require("./routes/position")
const holdingRoutes = require("./routes/holding")
const watchlistRoutes = require("./routes/watchlist")
const orderRoutes = require("./routes/order")
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware 
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


// mongoDB

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connection done ");
  })
  .catch((err) => {
    console.log(err);
  });


app.use("/user", userRoutes);
app.use("/holding" , holdingRoutes);
app.use("/position" , positionRoutes)
app.use("/watchlist" , watchlistRoutes )
app.use("/order" , orderRoutes )

module.exports = app;
