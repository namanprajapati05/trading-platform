const express = require("express");
const router = express.Router();

const { position } = require("../models/position");
const asyncHandler = require("../utils/asyncHandler");



router.get("/all", asyncHandler(async (req, res) => {
  const allData = await position.find({});
  console.log(allData);
  res.json(allData);
})
);


module.exports = router;
