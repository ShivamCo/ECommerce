import express from "express";
import { productModel } from "../models/productModel.js";



export const router = express.Router()



router.get("/:category/:lprice/:hprice/:rating", async (req,res) => {
    const {category, lprice, hprice, rating} = req.params
    console.log(category)


    if (category == "All"){
        const filteredProducts = await productModel.find({
            
            price: {$lte: hprice, $gte:lprice},
            rating:{$gte:rating}
        }).exec()
    
        res.json(filteredProducts)

    } else {
        const filteredProducts = await productModel.find({
            category: category,
            price: {$lte: hprice, $gte:lprice},
            rating:{$gte:rating}
        }).exec()
    
        res.json(filteredProducts)
    }
    
})


export { router as productFilter }