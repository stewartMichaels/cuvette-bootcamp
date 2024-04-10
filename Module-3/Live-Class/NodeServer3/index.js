const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const port = 3000;

app.set('view engine', 'ejs');

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    avatar: String
});

app.get('/', (req, res) => {
    res.send(`Hello! The server is running on ${port} and this is the home page!!`)
});

app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log(`The server is running on ${port} and the database is connected`))
        .catch((error) => console.log(error));
});