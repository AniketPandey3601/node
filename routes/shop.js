const express = require('express');

const router = express.Router();

router.use('',(req,res,next)=>{
    console.log("in the  another middleware");
    res.send('<h1>Hello yash  from express</h1>');
})


module.exports = router;