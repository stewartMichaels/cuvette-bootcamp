const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const dotenv = require("dotenv");
dotenv.config();

const productRoutes = require("./src/routes/products.js");

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.json());
app.use(productRoutes);

app.get("/", (req, res) => {
  res.send(`Hello, from homepage! Server running on ${port}`);
});

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Server running on ${port}`))
    .catch((error) => console.log(error));
});
