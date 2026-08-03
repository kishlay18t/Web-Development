const express = require("express");
const app = express();

const fs = require("fs");
const { parse } = require("path");

const path = require("path");


const videos = [
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


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/video-forum", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "create-post.html"));
});

app.get("/api/video", (req, res) =>{
    res.json(videos);
});

app.listen(3000, () =>{
    console.log("Server is listening on port: 3000");
});