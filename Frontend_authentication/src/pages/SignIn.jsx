import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signInFailure,signInSucess,signInStart } from '../redux/user/userSlice';
import {useDispatch,useSelector} from 'react-redux'

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading,error} = useSelector((state)=>state.user);
  const [formData,setFormData] = useState({
    username:'',
    email:'',
    password:'',
  });
 
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  // where async is used use new react updates

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),

      });
      const data = await res.json();
     dispatch(signInSucess(data));
      if(data.sucess === false){
       dispatch(signInFailure());
        return;
      }

      navigate('/')
    }catch(error){
      dispatch(signInFailure(error))
    }
  }
  return (
    <>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 '>Sign-In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* <input type="text" onChange={handleChange} name='username' id='username' placeholder='UserName' className='bg-slate-300 p-3 rounded-lg' /> */}
        <input type="email" onChange={handleChange} name='email' id='email' placeholder='Email' className='bg-slate-300 p-3 rounded-lg' />
        <input type="password" onChange={handleChange} name='password' id='password' placeholder='Password'  className='bg-slate-300 p-3 rounded-lg' />
        <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'loading...' : 'Sign-In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/signup'>
          <span className='text-blue-500'>SignUp</span>
        </Link>

      </div>
      <p className='text-red-700 mt-5'>{error ? 'something went wrong' : ''}</p>
    </div>
    </>
  )
}
