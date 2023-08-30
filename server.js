const express=require('express');
const cors=require('cors');
const bodyParser = require("body-parser");
const user = require("./routes/user"); 
const product = require("./routes/product"); 
const InitiateMongoServer = require("./db");

InitiateMongoServer();

const app=express();

app.use(express.static('public'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send('Hello world!');
});

app.use("/user", user);
app.use("/product", product);

app.listen(port,function(){
    console.log('Server is running on port 3000');
});