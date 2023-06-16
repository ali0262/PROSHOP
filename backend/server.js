import express from 'express';
import products from './data/products.js'
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/DB.js';
import colors from 'colors';
dotenv.config()

connectDB()
const app = express();



app.use(cors());

app.get('/',(req,res)=>{
    res.send('api is running')
})


app.get('/api/products',(req,res)=>{

    res.json(products)
})


app.get('/api/products/:id',(req,res)=>{
        const product = products.find((product)=> product._id === req.params.id)
    res.json(product)
})




const PORT = process.env.PORT || 8000


app.listen(PORT,'127.0.0.1',()=>{
    console.log(`server running in : ${process.env.NODE_ENV} mode on port : ${PORT}`.yellow.underline.bold);
});
