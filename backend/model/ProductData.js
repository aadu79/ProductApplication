const mongoose=require ('mongoose');
const productSchema=mongoose.Schema({
    productName:String,
    productPrice:Number,
    productDescription:String,
    productCategory:String
})

const ProductData=mongoose.model('productdetail',productSchema);
module.exports=ProductData;