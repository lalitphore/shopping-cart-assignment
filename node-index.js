const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('./connection');
app.use(express.static('../../git/shopping-cart-assignment/public'));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html')); 
});

app.get('/products',function(req,res){
    var requestData = req.query;
    const products = mongoose.db("shopping-cart").collection("products");
    if(requestData.categoryId){
        var obj = products.find({"category":requestData.categoryId});
    }else{
        var obj = products.find();
    }
    var nodeArr;
    obj.toArray(function (err, docs) {
        if (err) throw err;
        nodeArr = docs;
        res.send(nodeArr);
    });
});

app.get('/users',function(req,res){
    var requestData = req.query;
    const users = mongoose.db("shopping-cart").collection("users");
    var obj = users.find({}).sort( { "order": -1 } );
    obj.toArray(function (err, docs) {
        if (err) throw err;
        res.send(docs);
    });
});

app.post('/login',function(req,res){
    var requestData = req.post;
    concat(req, buffer => {
        const data = qs.parse(buffer.toString());
        console.log('Data: ', data);
      });
    console.log(requestData);
});

app.post('/register',function(req,res){
    var requestData = req.body;

    console.log(requestData);
    
    /*
    const user = mongoose.db("shopping-cart").collection("users");
    var obj = user.insertOne(requestData);
    console.log(obj);
    obj.toArray(function (err, docs) {
        if (err) throw err;
        res.send(docs);
    });*/
});

app.get('/categories',function(req,res){
    var requestData = req.query;
    const categories = mongoose.db("shopping-cart").collection("category");
    var obj = categories.find({"enabled":true}).sort( { "order": -1 } );
    obj.toArray(function (err, docs) {
        if (err) throw err;
        for(let m=0;m<docs.length;m++){ if(docs[m]['id']==requestData.active){ docs[m]['active']='active'; } }
        
        res.send(docs);
    });
});

app.get('/home_banners',function(req,res){
    const banners = mongoose.db("shopping-cart").collection("home_banners");
    var obj = banners.find({"isActive":true});
    var nodeArr;
    obj.toArray(function (err, docs) {
        if (err) throw err;
        nodeArr = docs;
        res.send(nodeArr);
    });
});


var server = app.listen(3030,function(){
    console.log('SERVER STARTED');
});