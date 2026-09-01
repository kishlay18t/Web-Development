const express = require("express");
const app = express();

const path = require("path");

const postRoutes = require("./route/post");

function validatePostRequest(reqObject){
    const { id, title, channel, views } = reqObject;
    // ID Validation
    if (!id || isNaN(Number(id)) || Number(id) < 1){
        return {
            valid: false,
            errors: [
                "Id must be a number",
                "Id must be positive"
            ]
        };
    }

    // title, channel, views validation 
    if ( !title || !channel || !views ){
        return {
            valid: false,
            errors: [
                "Missing input fields"
            ]
        };
    }

    return {
        valid: true,
        errors: []
    }
}

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.json());

// Validate Post
app.use((req,res,next) => {
    if (req.method !== "POST"){
        return next();
    }

    const validation = validatePostRequest(req.body);
    if (!validation.valid){
        console.log("Check not passed");
        const err = new Error("Request Validation Failed");
        err.status = 400;
        err.errors = validation.errors;

        return next(err);
    }

    console.log("Check passed");
    next();
});

// Posts router
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

// error handler -- must be after the router
app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors
    });
});

app.listen(3000, () =>{
    console.log("Server is listening on port: 3000");
});