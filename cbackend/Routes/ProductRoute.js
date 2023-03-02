//This file represents Routes for Product and takes functions from ProductController.js --> which has functions to be called . 
const express = require('express');
const productRouter = express.Router();



const { productUpload, productShow , productDelete , productUpdate  } = require('../Controllers/ProductController');


productRouter.post('/newproduct', productUpload); //productUpload 

productRouter.delete('/delete/:id', productDelete); //productDelete 

productRouter.post('/update/:id', productUpdate); //productUpdate 


productRouter.get('/new', productShow);//ProductShow

module.exports = productRouter