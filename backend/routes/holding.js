const express = require("express");
const router = express.Router(); 

const {holding} = require("../models/holding")
const authenticate = require("../middleware/authenticate");
const asyncHandler = require("../utils/asyncHandler");

router.get("/all" , asyncHandler( async (req, res) => {

    const allData = await holding.find({});
    // console.log(allData);
   res.status(200).json(allData);
 
})
);


module.exports = router;
