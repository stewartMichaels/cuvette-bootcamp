const express = require("express");
const db = require("./config/db");
const Post = require("./models/Post");

const app = express();

const port = 3000;

app.use(express.json());

db()
  .then(() => console.log("successfully connected  to db"))
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.send("Root page");
})

// checking api health
app.get('/api', (req, res) => {
  res.status(200).json({
    message: "Api is running",
  })
})

//  fetching posts
app.get('/api/posts', (req, res) => {
  Post.find({}).then((data) => {
    console.log(data);
    res.status(200).json({ data })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({ message: error })
  })
})

// get a specific post
app.get('/api/posts/:id', (req, res) => {
  let postid = req.params.id;

  Post.find({ _id: postid }).then((data) => {
    console.log(data);
    res.status(200).json({ data })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({ message: error })
  })
})

// create a new post
app.get('/api/posts/', (req, res) => {
  let newPost = new Post({
    title: req.body.title,
    description: req.body.description
  })

  newPost.save().then((data) => {
    console.log(data);
    res.status(200).json({ message: "post created successfully", data: data })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({ message: error })
  })
})

// updating a specific post
app.put('/api/posts/:id', (req, res) => {
  let postid = req.params.id;
  let newInfo = {
    title: req.body.title,
    description: req.body.description
  }

  Post.findByIdAndUpdate(postid, newInfo).then((data) => {
    res.status(200).json({ message: "post updated successfully", data: data })
  }).catch((error) => {
    res.status(500).json({ message: error })
  })
})

// delete a specific post
app.delete('/api/posts/:id', (req, res) => {
  let postid = req.params.id;

  Post.findByIdAndDelete(postid).then((data) => {
    res.status(200).json({ message: "post deleted successfully", data: data })
  }).catch((error) => {
    res.status(500).json({ message: error })
  })
})

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at ${port}`);
  }
  else {
    console.log(error);
  }
});
