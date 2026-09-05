const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();



const authenticate = require("./middleware/authenticate")
const userRoutes = require("./routes/user");
const positionRoutes = require("./routes/position")
const holdingRoutes = require("./routes/holding")
const watchlistRoutes = require("./routes/watchlist")
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware 

app.use(cors({
    origin: "http://localhost:5173",
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
app.use("/holding" , holdingRoutes )
app.use("/watchlist" , watchlistRoutes )



app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT} `);
});
