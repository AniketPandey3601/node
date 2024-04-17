
const rootDIr =require('../util/path')


const path = require('path');


exports.getAddProduct = (req,res,next)=>{

    res.sendFile(path.join(rootDIr, 'views', 'add-product.html'))
   
}




exports.postaddproducts = (req,res,next)=>{
    res.redirect('/')
   
}


exports.getproduct = (req,res,next)=>{
    res.sendFile(path.join(rootDIr,'views','shop.html'));
 }