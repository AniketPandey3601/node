const express = require('express');

const router = express.Router();
const path = require('path');
const rootDIr =require('../util/path')

router.get('/add-product',(req,res,next)=>{

    res.sendFile(path.join(rootDIr, 'views', 'add-product.html'))
   
})

router.post('/add-product', (req,res,next)=>{
    res.redirect('/')
   
})



module.exports = router;