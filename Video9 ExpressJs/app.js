// //Express js'i ekleyelim.
// const http = require("http");
// const express = require("express");
// //Daha sonra  app adında bir değişken tanımlayıp buna express fonksiyonunu assign edelim.
// const app = express();
// //Daha sonra  app adında bir değişken tanımlayıp buna express fonksiyonunu assign edelim ve şimdi ise http ile serverımızı ayağa kaldıralım .
// const server=http.createServer(app);
// server.listen(3000);


//Middleware
const express = require("express");

const app = express();
//Middleware oluşturmak için şeklinde bir tanım yapmalıyız 
// bu tanımı yaparken req res ve next adında 3 adet argüman alan bir fonksiyon alması gerektiğini unutmamalıyız.

app.use('/',(req,res,next)=>{
    console.log("Selam burası her zaman çalışacak .");
    next();
});


app.use('/',(req,res,next)=>{
    console.log("Selam burası ilk middleware.");
    res.send("<h1>Selamlar burası index middleware </h1>")
    
});

app.use('/product',(req,res,next)=>{
    console.log("Selam burası ikinci middleware.");
    res.send("<h1>Selamlar burası product middleware </h1>")
});

app.listen(3000);
