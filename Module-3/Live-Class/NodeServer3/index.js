const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

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

// GET / users (read)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 'Success',
            data: users
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: 'Something Went Wrong'
        })
    }
})

// POST / users (create)
app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, email, avatar } = req.body;

        const users = await User.create({ firstName, lastName, email, avatar });
        res.status(200).json({
            status: 'Success',
            message: 'User Created Successfully',
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: 'Something Went Wrong'
        })
    }
})

app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log(`The server is running on ${port} and the database is connected`))
        .catch((error) => console.log(error));
});