var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([{ a: 1 }, {b: 2 },{c: 3 }]));

});
app.listen(3000);