import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})

  }
  // where async is used use new react updates
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }); 
    const data = await res.json();
    setLoading(false);
    if(data.sucess === false){
      setError(true);
      return;
    }
 }catch(error){
  setLoading(false);
  setError(true);
 }
   
    
    
  }
  return (
    <>
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>sign up</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
      <input type="text" onChange={handleChange} name="username" id="username" placeholder='UserName' className='bg-slate-300 p-3 rounded-lg'/>
      <input type="email" onChange={handleChange} name="email" id="email" placeholder='email' className='bg-slate-300 p-3 rounded-lg'/>
      <input type="password" onChange={handleChange} name="password" id="password" placeholder='password' className='bg-slate-300 p-3 rounded-lg'/>
      <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'loading...' : 'Sign up'}</button>
    
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to='/signin'><span className='text-blue-500'>Sign-In</span></Link>
    </div>
    <p className='text-red-700 mt-5'>{error && "something went wrong" }</p>
    </div>
    </>
  )
}
