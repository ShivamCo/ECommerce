import express from "express";
import { productModel } from "../models/productModel.js"



const router = express.Router()


router.get("/singleProduct/:title", async (req,res) =>{
const title = req.params.title


try {

const productDetails = await productModel.find({title: title})
res.json(productDetails[0])


} catch (error){

    res.json(" No Product Found ")

}


} )


export { router as singleProduct }