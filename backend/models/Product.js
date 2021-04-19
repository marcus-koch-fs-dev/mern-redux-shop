const mongoose = require("mongoose")

// Constructor setup
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
})

const Product = mongoose.model("Product",productSchema)

module.exports = Product