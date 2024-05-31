const http = require('http');
const path = require('path')
const express = require('express');
const app = express();
const errorcontroller = require('./controllers/error')
const sequelize = require('./util/database')

const adminRoutes = require('./routes/admin.js');
const shoproutes = require('./routes/shop');

const bodyParser = require('body-parser')
const User = require('./models/user')
const Product = require('./models/product')
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname+'/public')))
// app.use(express.static('public'));




app.use('/admin',adminRoutes);
app.use('/shop', shoproutes);


app.use('/contactus',(req,res,next)=>{

    res.send(`<form method ="POST">Name:<input type=text > <br><br> Email:<input type="email"></form>`)
})

app.use((req,res,next)=>{

    User.findByPk(1).then(user=>{
        req.user = user;
        next();
    })
    .catch(err=>{
        console.log(err);
    })
})

app.use(errorcontroller.e404error)

Product.belongsTo(User , {constraints:true , onDelete:'CASCADE'})
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize.sync({force:true}).then(result=>{
    return User.findByPk(1);
    
})
.then(user=>{
    if(!user){

       return  User.create({id:1 , name:'max',email:'test@test.com'})
    }
    return user;
}).then(result=>{

    console.log(result);
    app.listen(3000)
})
.catch(err=>{

    console.log(err)
})



mongoConnect(() => {
    app.listen(3000);
  });