const express = require("express");
const app = express();
const fs = require("fs");
const home = fs.readFileSync("../views/index.html");

app.use((req,res,next) => {
    console.log("Middleware 1");
    next();
});

app.use((req,res,next) => {
    console.log("Middleware 2");
    const error = new Error("PC Exploding in 3 seconds");

    next(error);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.use((req,res,next) => {
    console.log("Middleware 3");
    next();
});

app.get("/", (req, res) => {
    res.status(200).send(home);
});

app.listen(3000, () => {
    console.log("Server listening on port : 3000");
});