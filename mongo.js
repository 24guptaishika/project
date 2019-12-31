var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/charity";
let express=require('express');
let server=express();
let path=require('path');
let bodyparser=require('body-parser');
var urlencodedParser=bodyparser.urlencoded({extended:true});
server.set('view engine','ejs');
server.use(express.static(__dirname));
var main ;
var n;
var n1;
server.get('/events',function(req,res)
{
  res.sendFile(__dirname+'/index.html');
});
//creating a new user
server.post('/signup',urlencodedParser,function(req,res)
{
    //creating an object to insert into our database
    main = { name: req.body.name, 
            email: req.body.email, 
            amount:req.body.amount,
            phone:req.body.phone,
           message:req.body.message
        };
  //printing object to check
  console.log(main);
  //connecting with mongodb and saving in mongodb
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("charity");//database name and collection name
  dbo.collection('charity1').insertOne(main, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
});
server.listen(3000);
console.log('server created');
