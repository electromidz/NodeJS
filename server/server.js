const http = require("http");
const server = http.createServer((req , res) => {
    res.writeHead(200,{"Content-type" : "text/html"});
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server</title>
    </head>
    <body>
        <h1>Sample Server</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
    </body>
    </html>
    `);
});

server.listen(2000);
console.log("Server in running on http://localhost:2000");
