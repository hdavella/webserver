const http = require("http");

http.createServer( (req, res) => {

    console.log(req);
    res.write("Hola Mundo");
    res.end();
}).listen(3000);