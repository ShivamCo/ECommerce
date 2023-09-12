import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config'
import bodyParser from "body-parser";

import { authRouter } from "./routes/userAuth.js";
import { productUpload } from "./routes/productUpload.js";
import { productFilter } from "./routes/productFilter.js";
import { addToCart } from "./routes/addToCart.js";
import { singleProduct } from "./routes/singleProduct.js";



const app = express();
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//.evn Config
const MONGODB_URL = process.env.MONGODB_URL

//Connect To Mongoose
mongoose.connect(`${MONGODB_URL}`);

//router setup
app.use("/auth", authRouter)
app.use("/product", productUpload)
app.use("/productFilter", productFilter)
app.use("/cart", addToCart)
app.use("/details", singleProduct)




app.listen(PORT, () => {
    console.log(`Server is Live on ${PORT}`)
} )