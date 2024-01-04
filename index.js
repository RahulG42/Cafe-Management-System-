const express=require('express');
var cors=require('cors');
const connection=require("./connection");
const userRoute=require('./routes/user');
const categoryRoute=require('./routes/category')
const productRoute=require('./routes/product');
const billRoute=require('./routes/bill');
const dashbordRoute=require('./routes/dashbord');
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRoute);
app.use('/category',categoryRoute);
app.use('/product',productRoute);
app.use('/bill',billRoute);
app.use('/dashbord',dashbordRoute)

module.exports=app;



