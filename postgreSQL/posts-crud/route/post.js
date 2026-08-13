// "/api/post" Routers.
const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

// Creating a connection to database
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "posts_db",
    password: "Kmp180926@",
    port: 5432
});

// DELETE Post
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    await pool.query(`
        DELETE
        FROM posts
        WHERE id = $1`, [ id ]);

    res.status(200).json({
        message: "Post deleted successfully!"
    });
});

// GET -- All posts
router.get("/", async (req, res) =>{

    const result = await pool.query("SELECT * FROM posts");

    res.json(result.rows);
});

// GET -- Specific Post data
router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const reqPost = await pool.query(`
        SELECT * 
        FROM posts
        WHERE id = $1`
        , [id]);

    if (reqPost.rows.length === 0){
        res.status(404).json({
            message: "Post not found"
        });
    }

    res.json(reqPost.rows[0]);
});

// POST -- New Post
router.post("/", (req, res) => {
    const newPost = req.body;
    newPost.id = Number(newPost.id);
    
    const { id, title, channel, views } = newPost;
    const result = await pool.query(`
        INSERT INTO posts (id, title, channel, views)
        VALUES ($1, $2, $3, $4)`

    , [id, title, channel, views] );

    res.status(201).json({
        message: "Post Created"
    });
});

// Edit Post -- PUT request.
router.put("/:id", (req, res) =>{

    const queryId = Number(req.params.id);
    const { id, title, channel, views } = req.body;

    await pool.query(`
        UPDATE posts
        SET id = $1,
            title = '$2',
            channel = '$3',
            views = '$4'
        WHERE id = $5;
    `, [id, title, channel, views, queryId ]);
    

    res.status(200).json({
        message: "Post Updated Successfully!"
    });
});

module.exports = router;