const express = require("express");
const app = express();

const fs = require("fs");
const { parse } = require("path");

const path = require("path");


const posts = [
    {
        id: 1,
        title: "Learn Node.js",
        channel: "Kishu",
        views: "12K"
    },
    {
        id: 2,
        title: "Express Basics",
        channel: "Kishu",
        views: "30K"
    },
    {
        id: 3,
        title: "JavaScript Arrays",
        channel: "Kishu",
        views: "18K"
    }
];

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.json());

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/post-forum", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "create-post.html"));
});

app.get("/api/post", (req, res) =>{
    res.json(posts);
});

app.get("/api/post/:id", (req, res) => {

    const id = req.params.id;
    const requestedPost = posts.filter((post) => post.id === id);
    console.log(requestedPost);
    res.send(requestedPost);
});

app.post("/api/post", (req, res) => {
    posts.push(req.body);
    res.status(201).json({
        message: "Post Created"
    });
});



app.listen(3000, () =>{
    console.log("Server is listening on port: 3000");
});