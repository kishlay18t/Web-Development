const http = require("http");
const fs = require("fs");
const { parse } = require("path");

const html = fs.readFileSync("./views/index.html", "utf-8");
const script = fs.readFileSync("./public/script.js", "utf-8");
const style = fs.readFileSync("./public/style.css", "utf-8");

const postForm = fs.readFileSync("./views/create-post.html", "utf-8");
const formStyle = fs.readFileSync("./public/create-post.css", "utf-8");
const formScript = fs.readFileSync("./public/create-post.js", "utf-8");

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


const server = http.createServer((req, res) => {
    if (req.url === "/video-forum"){
        res.setHeader("content-type", "text/html");
        res.end(postForm);
        return;
    }
    if (req.url === "/form-script"){
        res.setHeader("content-type", "application/javascript");
        res.end(formScript);
        return;
    }
    if (req.url === "/form-style"){
        res.setHeader("content-type", "text/css");
        res.end(formStyle);
        return;
    }

    if(req.url === "/api/video" && req.method === "GET"){
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(videos));
        return;
    }

    if (req.url === "/api/video" && req.method === "POST"){
        
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () =>{
            const parsedBody = JSON.parse(body);
            videos.push(parsedBody)

            res.statusCode = 201;
            res.end("Video Submitted");
        })

        return;
    }

    if (req.url === "/"){
        res.setHeader("content-type", "text/html");
        res.end(html);
        return;
    }

    if (req.url === "/script.js"){
        res.setHeader("content-type", "application/javascript");
        res.end(script);
        return;
    }

    if (req.url === "/style.css"){
        res.setHeader("content-type", "text/css");
        res.end(style);
        return;
    }

    res.statusCode = 404;
    res.end("Error 404: Not Found!");
});

server.listen(3000, () =>{
    console.log("Server is listening on the port: 3000");
});