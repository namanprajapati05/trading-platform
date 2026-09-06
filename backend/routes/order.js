const express = require("express");
const router = express.Router();
const { Order } = require("../models/order");
const asyncHandler = require("../utils/asyncHandler");
const authenticate = require("../middleware/authenticate");

router.post("/newOrder", authenticate ,  asyncHandler (async(req, res) => {
  const orderData = req.body;

  let neworder = new Order({
    userId: req.user.userId,
    name: orderData.name ,
    qty: orderData.qty,
    price: orderData.price,
      orderType: orderData.orderType,
    mode: orderData.mode,
  });
  
  await neworder.save();

    return res.status(201).json({
      message: "Order created successfully",
      order: neworder,
    });
  
  
}));

router.get("/allOrder" , authenticate ,  asyncHandler (async(req ,res)=>{
 
   const allData = await Order.find({
      userId: req.user.userId,
});

    res.status(200).json(allData);


}))




module.exports = router;