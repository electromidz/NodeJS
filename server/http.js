let http = require('http');
let fs = require('fs');


http.createServer(function(req , res) {
    fs.readFile('index.html' , function (err , data){

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    
    });
}).listen(2000);

console.log('Server is running on http://localhost:2000 .....');