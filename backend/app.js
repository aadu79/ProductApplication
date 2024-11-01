const express= require('express');
const app=new express();
const cors=require('cors');
require('./connection');
app.use(express.json());
app.use(cors());
const productModel=require('./model/ProductData');
const port=5999;


//post:
app.post('/addproduct',async(req,res)=>{
    try{
        var item=req.body; //the attached data sent  in req.body is assigned to item
        const data_add=new productModel(item);
        const data= await data_add.save();
        res.send('post successful');
    }
    catch (error){
      console.log(error);
    }
})

//get:
app.get('/productdetails', async(req,res)=>{

    try{
        const data = await productModel.find();
 res.send(data);
    }

    catch(error){
        console.log(error);
    }
 
})

//put:
app.put('/editproduct/:id',async(req,res)=>{
    try {
        const data= await productModel.findByIdAndUpdate(req.params.id,req.body)
        res.send('update successful')
    } catch (error) {
        console.log(error);
    }
})


//delete:
app.delete('/deleteproduct/:id',async(req,res)=>{
    try {
        const data= await productModel.findByIdAndDelete(req.params.id)
        res.send('delete successful')
    } catch (error) {
        console.log(error);
    }
})






app.listen(5999,()=>{
    console.log('server is running on port 5999');
})