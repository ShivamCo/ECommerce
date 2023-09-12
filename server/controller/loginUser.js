import { userModel } from "../models/userModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SOME_TEXT = process.env.SOME_TEXT;
const SOME_OTHER_TEXT = process.env.SOME_OTHER_TEXT

export const UserLogin = async (req, res) => {

    const { password, email } = req.body
    console.log(req.body)
    const emailCheck = await userModel.findOne({ email })


    if (!emailCheck) {

        return res.json({ message: 'You Are Not Registered' })
    }

    const passwordCheck = await bcrypt.compare(password, emailCheck.password);
    
    
    if (!passwordCheck) {
        return res.json({
            message: "Email or Password is Wrong!"
        })
    }

    const token = jwt.sign({ id: emailCheck._id }, SOME_TEXT);
    res.json({ token, userID: emailCheck._id, "message": "Login Successfully" })
}