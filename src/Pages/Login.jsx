import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
const handleLogin=(e)=>{
  e.preventDefault();
 
  const storedUser=JSON.parse(localStorage.getItem('user'));
  if(storedUser&& storedUser.email===email&&storedUser.password===password){
    alert('login successful');
    navigate('/home');
  }
  else{
    alert('Invalid credentials or not registered');
  }
}

  return (
    <div className='loginmain container-fluid'>
    <div className='row'>
<form action="/login" onSubmit={handleLogin} className='form-container'>
<h3 className='fw-bold mb-2'>Login here</h3>
<label htmlFor='email' className='mt-3'>Email/Phone</label><br/>
  <input type="text" id='email' placeholder='enter email/phone' autoFocus name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='border-1 border-light rounded w-100 bg-transparent  '/><br/>
  <label htmlFor='password' className='mt-3'>Password</label><br/>
  <input type="password" id='password' value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} className='border-1 border-light rounded w-100   bg-transparent' name="password"/><br/>
  <button type="submit" className='border-0 rounded-3  mt-3 fw-bold p-1 loginbtn logbtn'>Login</button>
<div className='d-flex  align-items-center justify-content-center mt-3 gap-5'> 
  <span className=' rounded-3 fw-bold text-success  p-1 logbtn rounded registerbackground' onClick={()=>navigate('/register')}><a className='underline text-success'>For Register</a></span>
   <span className=' rounded-3  fw-bold text-success  p-1 logbtn rounded registerbackground' onClick={()=>navigate('/register')}><a className='underline text-success'>Forgot Password?</a></span>
   </div>
   
</form>
    </div>

    </div>
  )
}

export default Login
