const http = require('http');
const path = require('path')
const express = require('express');
const app = express();
const errorcontroller = require('./controllers/error')
const db = require('./util/database')

const adminRoutes = require('./routes/admin.js');
const shoproutes = require('./routes/shop');

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname+'/public')))
// app.use(express.static('public'));


db.execute('SELECT * FROM products')
.then(result=>{console.log(result[0] , result[1])})
.catch(err=>{console.log(err)})

app.use('/admin',adminRoutes);
app.use('/shop', shoproutes);


app.use('/contactus',(req,res,next)=>{

    res.send(`<form method ="POST">Name:<input type=text > <br><br> Email:<input type="email"></form>`)
})

app.use(errorcontroller.e404error)








app.listen(4000);

 