import mongoose from 'mongoose';
// import { unique } from 'next/dist/build/utils';

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

    },
    profilePicture:{
        type:String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s",
    }
},{timestamps:true});

const User  = mongoose.model('User',userSchema);

export default User;