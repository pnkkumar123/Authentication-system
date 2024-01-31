import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    }
},{timestamps:true});

const User  = mongoose.model('User',userSchema);

export default User;