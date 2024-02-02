import React from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <>
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>sign up</h1>
    <form action="" className='flex flex-col gap-4 '>
      <input type="text" name="username" id="username" placeholder='UserName' className='bg-slate-300 p-3 rounded-lg'/>
      <input type="email" name="email" id="email" placeholder='email' className='bg-slate-300 p-3 rounded-lg'/>
      <input type="password" name="password" id="password" placeholder='password' className='bg-slate-300 p-3 rounded-lg'/>
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
