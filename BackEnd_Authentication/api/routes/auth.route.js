import express from 'express';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';


const authRouter = express.Router();

authRouter.post("/signup", async (req,res)=>{
    const {username,email,password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User ({username,email,password:hashedPassword})
   try{
    await newUser.save();
   res.status(201).json({message:"User created sucessfully"});
   }catch(e){
    res.status(500).json(e.message)
   }
})

export  {authRouter}