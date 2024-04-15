const http = require('http');
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shoproutes = require('./routes/shop');

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))




app.use('/admin',adminRoutes);
app.use('/shop', shoproutes);

app.use((req,res,next)=>{

    res.status(404).send('<h1>Page not found</h1>')
})








app.listen(4000);

 