const http = require("http");

const routes = {
    "/": (req,res) => {
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome Home</h1>
                <p>Welcome to the home page.</p>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/profile">Profile</a>
            </body>
            </html>
        `);
    },
    "/about": (req, res) => {
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>About</h1>
                <p>Know more about us.</p>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/profile">Profile</a>
            </body>
            </html>
        `);
    },
    "/profile": (req, res) => {
     res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Profile</title>
            </head>
            <body>
                <h1>My Profile</h1>
                <p>I am Kishu, nice to meet you.</p>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/profile">Profile</a>
            </body>
            </html>
        `);
    }
}

const server = http.createServer((req,res) => {

    console.log("Method: " + req.method);
    console.log("URL: " + req.url);
    const handler = routes[req.url];

    if (handler){
        handler(req,res);
    }
    else{
        res.statusCode = 404;
        res.end("Error 404: Not Found!");
    }
    console.log("Status: " + res.statusCode);
});

server.listen(3000,() => {
    console.log("This server is listening on port: 3000");
});