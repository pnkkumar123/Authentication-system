import express from 'express';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utilis/error.js';


const authRouter = express.Router();

authRouter.post("/signup", async (req,res,next)=>{
    const {username,email,password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User ({username,email,password:hashedPassword})
   try{
    await newUser.save();
   res.status(201).json({message:"User created sucessfully"});
   }catch(e){
   next(errorHandler(300,"something went wrong"))
   }
})

export  {authRouter}