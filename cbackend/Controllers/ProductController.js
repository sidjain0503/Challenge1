// This file has functions like upload and show . to upload products and show them from the database

const Product = require('../Models/ProductModel')

// Product upload 
module.exports.productUpload =async (req,res)=>{

    if (!req.body.name && !req.body.rating && !req.body.price && !req.body.stock && !req.body.description ){
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const product = new Product({
      name: req.body.name,
      rating:req.body.rating,
      price:req.body.price,
      stock:req.body.stock,
      description:req.body.description,
    });

    await  product.save().then(()=>{
        res.send({ message: "product added successfully." })

      }).catch((err)=>{
        console.log(err)
      });

}

// Product Show 
module.exports.productShow =(req,res)=>{
  
  Product.find().then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  });
 
}


// Product Update 
exports.productUpdate = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Product Delete

exports.productDelete = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};

