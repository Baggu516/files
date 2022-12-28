var http=require("http");//importing modules
var fs=require("fs");


http.createServer((req,res)=>{
//  res.write("hello woarldkkkkkkkkkkkkkkkk");
//  res.end();
fs.readFile("test.txt",(err,data)=>{
    res.write(data);
    res.end();
})
}).listen(8081)