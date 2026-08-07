const express = require("express");
const app = express();

const fs = require("fs");
const { parse } = require("path");

const path = require("path");


let posts = [
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

/* Middleware Example
 app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
}); */

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

    const id = Number(req.params.id);
    const requestedPost = posts.filter((post) => {
        return post.id === id;
    });

    if (requestedPost.length === 0){
        res.status(404).json({
            message: "Post not found!"
        });
    }
    
    res.json(requestedPost[0]);
});

app.post("/api/post", (req, res) => {
    const newPost = req.body;
    newPost.id = Number(newPost.id);
    
    posts.push(newPost);
    
    res.status(201).json({
        message: "Post Created"
    });
});

// Edit Post -- PUT request.
app.put("/api/post/:id", (req, res) =>{
    const id = Number(req.params.id);
    let post = posts.find((post) => post.id === id);
    const edit = req.body;

    if (!post){
        res.status(404).json({
            message: "HTTP Error 404: Requested ID not found"
        });

        return;
    }

    Object.assign(post, edit);
    post.id = Number(edit.id);

    res.status(201).json({
        message: "Post Updated Successfully!"
    });
});

app.get("/edit-forum/:id", (req, res) => {
    const id = Number(req.params.id);
    res.sendFile(path.join(__dirname, "views", "edit-post.html"));
});

// DELETE Post
app.delete("/api/post/:id", (req, res) => {
    const id = Number(req.params.id);

    const newPosts = posts.filter((post) => post.id !== id);
    posts = [...newPosts];

    res.status(204).json({
        message: "Post deleted successfully!"
    });
});

app.listen(3000, () =>{
    console.log("Server is listening on port: 3000");
});