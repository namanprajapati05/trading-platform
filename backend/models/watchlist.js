const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean
});

const Watchlist = mongoose.model("Watchlist", watchlistSchema);

module.exports = { Watchlist };