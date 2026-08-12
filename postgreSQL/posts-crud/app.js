const express = require("express");
const app = express();

const fs = require("fs");
const { parse } = require("path");

const path = require("path");

const postRoutes = require("./route/post");


app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.json());
app.use("/api/post", postRoutes);

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

app.get("/edit-forum/:id", (req, res) => {
    const id = Number(req.params.id);
    res.sendFile(path.join(__dirname, "views", "edit-post.html"));
});



app.listen(3000, () =>{
    console.log("Server is listening on port: 3000");
});