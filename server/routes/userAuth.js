import express, { Router } from "express";
import { userModel } from "../models/userModel.js";
import 'dotenv/config';
import { RegisterUser } from "../controller/registerUser.js";
import { UserLogin } from "../controller/loginUser.js";


const router = express.Router()


router.post("/register", RegisterUser)
router.post("/login", UserLogin )



export { router as authRouter }