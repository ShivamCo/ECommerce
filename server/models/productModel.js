import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    title: {
        type: String,
        require: true,

    },

    rating: {
        type: Number,
    },

    description: {
        type: String,
        require: true,
    },

    price: {
        type: Number,
        require: true,
    },

    category: {
        type: String,
        require: true,
    },

    image: String


})

export const productModel = mongoose.model( "productModel", productSchema)