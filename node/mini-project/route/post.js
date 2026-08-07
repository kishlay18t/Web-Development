// "/api/post" Routers.
const express = require("express");
const router = express.Router();

// Posts Array.
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

// DELETE Post
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const newPosts = posts.filter((post) => post.id !== id);
    posts = [...newPosts];

    res.status(204).json({
        message: "Post deleted successfully!"
    });
});

// GET -- All posts
router.get("/", (req, res) =>{
    res.json(posts);
});

// GET -- Specific Post data
router.get("/:id", (req, res) => {

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

// POST -- New Post
router.post("/", (req, res) => {
    const newPost = req.body;
    newPost.id = Number(newPost.id);
    
    posts.push(newPost);
    
    res.status(201).json({
        message: "Post Created"
    });
});

// Edit Post -- PUT request.
router.put("/:id", (req, res) =>{
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

module.exports = router;