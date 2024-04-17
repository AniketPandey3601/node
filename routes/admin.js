const express = require('express');

const router = express.Router();


const productcontrollers = require('../controllers/products')

router.get('/add-product',productcontrollers.getAddProduct)

router.post('/add-product',productcontrollers.postaddproducts)



module.exports = router;