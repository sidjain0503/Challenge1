// This is the main file on which our backend app is hosted! 

const express = require("express");
const port = 8080;
const app = express();
const bodyParser = require("body-parser")
const cors = require('cors')
const connection = require('./db')
const productRouter = require('./Routes/ProductRoute')


connection();  //database connection

app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());

//route handling
app.use(cors()); //This disables cors policy and allows to run both backend and frontend on the same device 

app.use("/product",productRouter); //This is a middleware calling on route /product and calling function "productRouter" imported from productRoute.js 

app.get("/",(req,res)=>{
    res.send( `programm running on port ${port}`)
})

app.listen(port, () => {
  console.log("Express Server is listening on Port: " + port);
}); 