import express, { Router } from "express";
import { userModel } from "../models/userModel.js";
import { productModel } from "../models/productModel.js"



const router = express.Router()

router.post("/add-to-cart", async (req, res) => {
    const product = req.body.id
    const user = req.body.user


    try {
        await userModel.findByIdAndUpdate({ _id: user }, { $push: { cart: product } })
        console.log(product, user)
        res.json({ message: "Product Added To Cart" })



    } catch (error) {
        console.log("not done")
        res.json({ message: "Unable To Add To Cart" })

    }
})


router.post("/remove-cart/:id/:user", async (req, res) => {
    const product = req.params.id
    const user = req.params.user
    console.log(product, user)

    try {
        await userModel.findOneAndUpdate({ _id: user }, { $pull: { cart: product } })

        res.json({ message: "Product Removed From Cart" })



    } catch (error) {
        console.log("not done")
        res.json({ message: "Unable To Remove From Cart" })

    }
})

router.get("/cart-list/:user", async (req, res) => {
    const user = req.params.user;


    try {
        const currentUser = await userModel.find({ _id: user })

        var currentCart = currentUser[0].cart
        let i = 0
        while( i<currentCart.length){
            if(currentCart[i] === ""){
                currentCart.splice(i, 1)
            } else {
                i++
            }
        }

        const allCartList = await productModel.find({
            '_id': {
                $in: currentCart

        }})
        
        res.json(allCartList)





    } catch (error) {
        console.log(error)
    }
})

export { router as addToCart }