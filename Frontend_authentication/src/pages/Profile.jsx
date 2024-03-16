import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { useRef } from 'react';
import {getStorage, uploadBytesResumable} from 'firebase/storage';
import {app} from 'firebase';

const Profile = () => {
  const fileRef = useRef(null);
  const {currentUser} = useSelector(state => state.user);
 console.log(currentUser);
 
 const [image,setImage] = useState(undefined);

 useEffect(()=>{
    if(image){
      handleFileUpload(image);
    }
 },[image])
 const handleFileUpload = async (image)=>{
const storage = getStorage(app);
const fileName = new Date().getTime() + image.name;
const storageRef =  ref(storage,fileName);
const uploadTask = uploadBytesResumable(storageRef,image);
uploadTask.on(
  'state_changed',
  (snapshot)=>{
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

  }
)
}
}
 return (
    <>
    <div className='p-3 max-w-lg mx-auto gap-4'>
      <h1 className='text-3xl font-semibold text-center
      my-7
      '>
      Profile
      </h1>
      <form  className='flex flex-col gap-4'>
      <input ref={fileRef} accept='image/*' type="file" name="" id="" hidden onChange={(e)=>setImage(e.target.files[0])}/>
        <img onClick={()=> fileRef.current.click()} src={currentUser.profilePicture} alt="" className='h-24 w-24 rounded-full self-center mt-2' />
         <input defaultValue={currentUser.username} type="text" name="username" placeholder='username' id="username" className='bg-slate-100 rounded-lg p-3' />
         <input defaultValue={currentUser.email} type="email" name="email" placeholder='email' id="email" className='bg-slate-100 rounded-lg p-3' />
         <input  type="password" name="password" id="password" placeholder='password'  className='bg-slate-100 rounded-lg p-3'/>
         <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
          <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
    
    
    </>
  )


export default Profile