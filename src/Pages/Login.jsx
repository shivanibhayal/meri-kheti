import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
const handleLogin=(e)=>{
  e.preventDefault();
  // console.log(email);
  // console.log(password);
  // alert("login successfull");
  // setEmail("")
  // setPassword("")
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
    <div className='loginmain d-fl'>
    <div>
<form action="/login" onSubmit={handleLogin}>
<h3 className='fw-bold mb-2'>Login here</h3>
<label className='mt-3'>Email/Phone</label><br/>
  <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-3'>Password</label><br/>
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='border-1 rounded w-50 fw-bold' name="password"/><br/>
  <button type="submit" className='border-0 rounded-3  mt-3 fw-bold p-1 loginbtn logbtn'>Login</button>
   <p className='border-0 rounded-3  mt-3 fw-bold  bg-light text-success  p-1 logbtn rounded ' onClick={()=>navigate('/register')}>For Register</p>
</form>
    </div>

    </div>
  )
}

export default Login
