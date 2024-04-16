const express = require('express');
const path = require('path')
const router = express.Router();
const rootDIr =require('../util/path')

router.use('',(req,res,next)=>{
   res.sendFile(path.join(rootDIr,'views','shop.html'));
})


module.exports = router;