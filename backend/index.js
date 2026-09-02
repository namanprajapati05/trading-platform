const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { holding } = require("./models/holding");
const { position } = require("./models/position");
const { order } = require("./models/order");
const { user } = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { Watchlist } = require("./models/watchlist");


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connection done ");
  })
  .catch((err) => {
    console.log(err);
  });

// get data routes

app.get("/allHoldingData", async (req, res) => {
  const allData = await holding.find({});
  console.log(allData);
  res.json(allData);
});

app.get("/allPositionData", async (req, res) => {
  const allData = await position.find({});
  console.log(allData);
  res.json(allData);
});


app.get("/watchlist", async (req, res) => {
    try {
        const data = await Watchlist.find({});

        res.json(data);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Error fetching watchlist data"
        });
    }
});


//post routes

app.post("/signup", async (req, res) => {
  try {
    let data = req.body;

    const hashPassword = await bcrypt.hash(data.password, 10);
    let tempData = new user({
      name: data.name,
      email: data.email,
      userName: data.userName,
      password: hashPassword,
    });

    await tempData.save();
    res.send("data was saved");
  } catch (error) {
    res.send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    let loginData = req.body;

    if (!loginData.password) {
      return res.status(400).send("Please enter your password");
    }

    if (!loginData.userName) {
      return res.status(400).send("Please enter username or email");
    }

    const loginUser = await user.findOne({
      userName: loginData.userName,
    });

    if (!loginUser) {
      return res.status(401).send("Invalid username or password");
    }

    const isMatch = await bcrypt.compare(
      loginData.password,
      loginUser.password,
    );

    if (!isMatch) {
      return res.status(401).send("Invalid username/email or password");
    }

    const token = jwt.sign(
      {
        userId: loginUser._id,
        userName: loginUser.userName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.send("User login successful");
    res.status(200).json({
      message: "user login successful",
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT} `);
});
