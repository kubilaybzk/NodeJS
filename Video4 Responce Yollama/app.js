const http = require("http"); // import işlemi

let server = http.createServer((req, res) => {
//   console.log(req.url, req.headers, req.method);
res.setHeader('Content-Type','text/html');
res.write("<html>");
res.write("<head><title>Hello World </title> </head>");
res.write("<body> <h1> Hello World1 !! </h1> </body> ");
res.write("</html>");
res.end();

});

server.listen(3000);
