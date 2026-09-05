const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {user} = require("../models/user");
const authenticate = require("../middleware/authenticate")
const asyncHandler = require("../utils/asyncHandler");



router.post("/signup", asyncHandler(async (req, res) => {
  
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
  
})
);

router.post("/login", asyncHandler(async (req, res) => {
 
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
    // accessToken 

      const accessToken = jwt.sign(
      {
        userId: loginUser._id,
        userName: loginUser.userName,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "5h",
      }
    );


//  refreshToken 
      const refreshToken  = jwt.sign(
      {
        userId: loginUser._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 5 * 60 * 60 * 1000,
    });

      res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

  
   return res.status(200).json({
      message: "User login successful",
    });

 
})
);


router.post("/refresh", asyncHandler(async (req, res) => {

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token not found",
      });
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // Create new access token
    const newAccessToken = jwt.sign(
      {
        userId: decoded.userId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "5h",
      }
    );

    // Send new access token
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 5 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Access token refreshed",
    });

 
})
);

router.post("/logout", asyncHandler((req, res) => {

   res.clearCookie("accessToken");
   res.clearCookie("refreshToken");

   res.json({
      message: "Logout successful"
   });

})
);


router.get("/profile", authenticate, async (req, res) => {

  console.log(req.user);
  
  res.json({
    message: "This is protected data",
  });
});



module.exports = router;