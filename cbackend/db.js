// <<<<<<< HEAD
//This file is for connecting to database

const connection = () => {
    const mongoose = require("mongoose");
    const Url = process.env.MONGO_DB;
    mongoose
      .connect(Url,{
        useNewUrlParser: true
    })
      .then(() => {
        console.log("connected to database mongodb");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  
  module.exports = connection;
  