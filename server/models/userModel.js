import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username: {
        type: String, 
        required: true, 
        unique: true 
    },

    email: {
        type: String, 
        required: true, 
        unique: true 
    },

    password: {
        type: String, 
        required: true, 
    },

    cart: []

})

export const userModel = mongoose.model("userModel", userSchema)