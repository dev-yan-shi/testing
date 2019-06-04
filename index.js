const express = require('express')
const bodyparser= require("body-parser")
const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static("static")); //named the static directory static
app.get("/", function(re,res,next){
res.send("Hi, this is my first node server");
});

app.get("/first", function(re,res,next){
res.send("Hi, this is my first node server!");
});
app.get("/second", function(re,res,next){
res.send("Hi, this is my first node server!");
});

app.post("/query", function(req,res,next){
//res.send(JSON.stringify(req.body));
if(!req.body.username){
res.send("username field is empty");
return;
}
if(!req.body.password){
res.send("password field is empty");
return;
}
res.send("your username is"+req.body.username+"and password is"+req.body.password);
});

app.get("/random", function(req,res,next){
res.send(""+Math.floor(Math.random()*100000));
});
app.listen(3000);  //port in which app would listen