const Product = require("../models/Product.js");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "SUCCESS",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, category, price, imageURL } = req.body;
    await Product.create({ name, category, price, imageURL });
    res.status(200).json({
      status: "SUCCESS",
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, price, imageURL } = req.body;
    await Product.findByIdAndUpdate(id, {
      name,
      category,
      price,
      imageURL,
    });
    res.status(200).json({
      status: "SUCCESS",
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      status: "SUCCESS",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
