var express= require('express');
var app=express();

//MongoClient
const MongoClient=require('mongodb').MongoClient;
const url='mongodb://127.0.0.1:27017';
const dbName='hospitalManagement';
let db;
//parser
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
//securing API
let config = require('./config');
let middleware = require('./middleware');
let server=require('./server');
//Database connection
MongoClient.connect(url, (err,client)=>{
    if(err) return console.log(err);
    db=client.db(dbName);
    console.log('Connected Database:'+url);
    console.log('Database : '+dbName);
});
//get hospital details
app.get("/hospitalDetails",middleware.checkToken,(req,res)=>{
  var temp=db.collection("hospitalDetails").find().toArray().then(result=>res.json(result));
   console.log("Fetching hospital details from database....");
});
//get ventilator details
app.get("/ventilators",middleware.checkToken,(req,res)=>{
  var temp=db.collection("ventilators").find().toArray().then(result=>res.json(result));
    console.log("Fetching ventilator details from database....");
});
//searchHospitalByName
app.post("/searchHospitalByName",middleware.checkToken,(req,res)=>{
  var name=req.query.name;
  console.log("name of the hospital:"+name);
  var temp=db.collection("hospitalDetails").find({"name":new RegExp(name,'i')}).toArray().then(result=>res.json(result));
});
//searchVentilatorsByStatusHospitalName
app.post("/searchVentilatorsByStatusHospitalName",middleware.checkToken,(req,res)=>{
  var status=req.query.status;
  var name=req.query.name;

  console.log("hospital name:"+name+"status"+status);
  var temp=db.collection("ventilators").find({"status":status,"name":name}).toArray().then(result=>res.json(result));
});
//addVentilatorByUser
app.post("/addVentilatorByUser",middleware.checkToken,(req,res)=>{
  var hid=req.body.hid;
  var name=req.body.name;
  var status=req.body.status;
  var ventilatorId=req.body.ventilatorId;
  var item={"hid":hid,"ventilatorId":ventilatorId,"status":status,"name":name};
  console.log(item);
  db.collection("ventilators").insertOne(item,(err,result)=>{
    res.json("Item inserted successfully");
  });
});
//updateVentilatorById
app.put("/updateVentilatorById",middleware.checkToken,(req,res)=>{
  var vid={"ventilatorId":req.body.ventilatorId};
  console.log(vid);
  var newstatus={$set:{"status":req.body.status}};
  db.collection("ventilators").updateOne(vid,newstatus,(err,result)=>{
    res.json("single document updated");
    if(err) throw err;
  });
});
//deleteVentilatorById
app.delete("/deleteVentilatorById",middleware.checkToken,(req,res)=>{
   var ventilatorId=req.query.ventilatorId;
   console.log("Deleting ventilator with ID:"+ventilatorId);
   db.collection("ventilators").deleteOne({"ventilatorId":ventilatorId},(err,result)=>{
     res.json("Ventilator Item delted");
   });
});
app.listen(3000);
