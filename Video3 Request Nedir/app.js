const http=require('http'); // import işlemi

// http.createServer(); bu şeklilde bir server oluşturabiliyoruz.
//bu server  bir fonksiyona ihtiyaç duyar ve bu fonksiyon



// function rqListener(req,res){
//     //Request Listiner gelen requestleri dinlemek için
// }

// bu fonksiyon'un başka türlüde kullanabiliriz.


// let server = http.createServer(function(req,res){}); gibi 

// let server = http.createServer((req,res)=>{}); gibi 


// Şimdi bir server geliştirelim.



let server = http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method)
    // process.exit();
});  

//Şimdi bunu Node app.js yazarak terminal üzerinden görmek isteyelim.
//Burada eğer bu işlemi yaparsak sunucu olmadığından terminalde hiçbir şey görmeyeceğiz.
//bunun için oluşturduğumuz sunucunun bir port üzerinden çalışması lazım .
// bunun için 

server.listen(3000);
//Şimdi tekrar node app.js yazarsak pointer elemanının yanıp sanmadığını fark edeceğiz bu şu anlama geliyor.
//Loop olarak bizim bütün request değerlerimizi dinliyor.
//Şimdi bir tarayıcı açalım ve localhost:3000'e girelim.
//Daha sonra terminal çıktısına bakalım.
