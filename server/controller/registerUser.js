import { userModel } from "../models/userModel.js"
import bcrypt from "bcrypt";
const salt = 10;

export const RegisterUser = async (req, res) => {
        
    const { username, password, email } = req.body

   

    const user = await userModel.findOne({email})
    const emailCheck = await userModel.findOne({email:email})
    

    if (emailCheck) {

    return res.json({ message: 'Email Already Registered!' })
    
  } 

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ username, password: hashedPassword, email })

    await newUser.save()
    
    return res.json({ "message": "User Registered Successfully" })
    
}
