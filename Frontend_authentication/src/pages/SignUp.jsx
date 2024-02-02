import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})

  }
  // where async is used use new react updates
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!res.ok) {
      // Handle non-successful responses
      console.error('Error:', res.status, res.statusText);
      return;
    }
    
    try {
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
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
      <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>SignUp</button>
    
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to='/signin'><span className='text-blue-500'>Sign-In</span></Link>
    </div>
    </div>
    </>
  )
}
