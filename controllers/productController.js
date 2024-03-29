const Product =  require('../models/productModel');


// @desc: gets all products
// @route: GET api/products 
async function getProducts(req, res){
    try{
        const products = await Product.findAll()
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify(products));
    }catch(error){
        console.log(error);
    }
}

// @desc: gets single product
// @route: GET api/products:id 
async function getProduct(req, res, id){
    try{
        const product = await Product.findById(id);
        if(!product){
            res.writeHead(404, {'content-Type': 'application/json'})
            res.end(JSON.stringify({message: "product not found"}));
        }
        else{
            res.writeHead(200, {'content-Type': 'application/json'})
            res.end(JSON.stringify(product));
        }
    }catch(error){
        console.log(error);
    }
}
// @desc: creates a product
// @route: POST api/products 
async function createProduct(req, res){
    try{
        
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct
}