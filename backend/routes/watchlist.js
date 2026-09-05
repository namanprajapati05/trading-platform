const express = require("express");
const router = express.Router(); 

const { Watchlist } = require("../models/watchlist");
const asyncHandler = require("../utils/asyncHandler");



router.get("/watchlist", asyncHandler(async (req, res) => {
    
        const data = await Watchlist.find({});

        res.json(data);
   
})
);


module.exports = router ;