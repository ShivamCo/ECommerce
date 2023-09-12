import mongoose from "mongoose";
import express from "express"
import { productModel } from "../models/productModel.js";
import multer from "multer";

//impo
// import x from "../../client/images"

export const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/src/images/products"
        // '../../client/src/images/products'
        )
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix + '-' + file.originalname )
    }
  })


const upload = multer({ storage: storage })


router.post("/upload", upload.single('image'), (req, res) => {

    
    console.log(req.file.filename)
    const newProduct = {
        title: req.body.title,
        rating: req.body.rating,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.file.filename,
    }

    


    try {

        productModel.create(newProduct)
        res.json({ message: "Product Added Successful" })
    } catch (error) {
        res.json({ message: "Unable To Add Product, Try Again Later" })
    }



})


export { router as productUpload }






