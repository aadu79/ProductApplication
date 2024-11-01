const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://muhammedadilmp7:Adillida7@cluster0.8wmnz.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('DB is connected');
}).catch((error)=>{
    console.log('Connection error!');
});