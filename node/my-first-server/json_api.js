const http = require("http");
const { json } = require("stream/consumers");

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
    if (req.url === "/api/video"){
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(videos));
        return;
    }
    
    res.statusCode = 404;
    res.end("Error 404: Not Found!");
});

server.listen(3000, () =>{
    console.log("Server is listening on the port: 3000");
});