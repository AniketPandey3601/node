const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<form action = "/product" method = "POST"><input type= "text" name= "title"><button type = "submit">Add Product</button></form>')
})

app.use('/product', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    console.log("in the  another middleware");
    res.send('<h1>Hello yash  from express</h1>');
})


app.listen(4000);

 