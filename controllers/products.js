

const Product = require('../models/product')
const rootDIr =require('../util/path')


const path = require('path');


exports.getAddProduct = (req,res,next)=>{

    res.sendFile(path.join(rootDIr, 'views', 'add-product.html'))
   
}




exports.postaddproducts = (req,res,next)=>{
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/')
   
}


exports.getproduct = (req,res,next)=>{
    const products = Product.fetchAll(products=>{
        res.sendFile(path.join(rootDIr,'views','shop.html'));

    });
   
 }