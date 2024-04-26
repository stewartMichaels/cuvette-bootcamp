const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: String,
  category: String,
  price: Number,
  imageURL: String,
});

module.exports = Product;
