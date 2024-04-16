const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shoproutes = require('./routes/shop');

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname+'/public')))
// app.use(express.static('public'));




app.use('/admin',adminRoutes);
app.use('/shop', shoproutes);

app.use('/contactus',(req,res,next)=>{

    res.send(`<form method ="POST">Name:<input type=text > <br><br> Email:<input type="email"></form>`)
})

app.use((req,res,next)=>{

    res.status(404).sendFile(path.join(__dirname ,  'views' , '404.html'))
})








app.listen(4000);

 