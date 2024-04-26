const express = require("express");

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Products.js");

const router = express.Router();

router.get("/product", getProduct);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
