const express = require('express');
const app = express();

const mongoose = require('mongoose');

const port = 3000;

app.set('view engine', 'ejs');

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String
});

const Book = mongoose.model('Book', {
    bookName: String,
    authorName: String,
    genre: String
});

const Child = mongoose.model('Child', {
    childName: String,
    childAge: Number,
    parentsName: String
});

const Lady = mongoose.model('Lady', {
    ladyName: String,
    spouseName: String
})

app.get('/', (req, res) => {
    res.send(`Hello! The server is running on ${port} and this is the home page!!`)
});

app.listen(port, () => {
    mongoose
        .connect('mongodb+srv://user:user123@nodesever3.rmhayw5.mongodb.net/?retryWrites=true&w=majority&appName=NodeSever3')
        .then(() => console.log(`The server is running on ${port} and the database is connected`))
        .catch((error) => console.log(error));
});