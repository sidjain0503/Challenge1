// The schema for storing products : basically the structure of our product 

const mongoose = require("mongoose");

// ************************************************************************************************
const product = mongoose.Schema({
  name: {
    type: String,
    require : true 
  },
  rating: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  description: {
    type: String,
  }
});


module.exports = mongoose.model("Product", product);