const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const userRoutes = require("./routes/User.js");

const port = 3000;

const isLoggedIn = (req, res, next) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_PRIVATE_KEY);
    req.user = user;
    next();
  } catch (error) {
    return res.send("You have not logged in. Please log in!");
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  }
  return res.send("You are not authorized to access this page!");
};

const isPremium = (req, res, next) => {
  if (req.user.isPremium) {
    next();
  }
  return res.send("You are not authorized to access this page!");
};

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(userRoutes);

// NON-LOGGED IN USERS
app.get("/", (req, res) => {
  res.send("Landing Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// LOGGED IN USERS
app.get("/products", isLoggedIn, (req, res) => {
  res.send({
    fullName: req.user.firstName + " " + req.user.lastName,
    page: "Products Page",
  });
});

// LOGGED IN + ADMINS
app.get("/admin", isLoggedIn, isAdmin, (req, res) => {
  res.send("Admin Page");
});

// LOGGED IN + PREMIUM USERS
app.get("/products/premium", isLoggedIn, isPremium, (req, res) => {
  res.send("Premium Products, Premium Users");
});

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Listening to port ${port}`))
    .catch((error) => console.log(`DB error > ${error}`));
});
