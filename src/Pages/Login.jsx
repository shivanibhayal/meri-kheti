import React, { useState } from 'react';
import '../assets/css/login.css';

const Login = () => {
  const [openlogin,setOpenLogin]=useState(true);
  return (
    <div className='container min-vh-100 d-flex align-items-center justify-content-center'>
      <div className='row justify-content-center'>
        <div className='col-12 border-1'>
          <div className='text-center mb-3'>
            <button  className={`btn p-2 m-2 ${openlogin ? 'btn-light' : 'bg-success text-white'}`} onClick={()=>setOpenLogin(true)} type='button' >Login</button>
            <button  className={`btn p-2 m-2 ${!openlogin ? 'btn-light' : 'bg-success text-white'}`} onClick={()=>setOpenLogin(!openlogin)} type='button'>Sign-up</button>
          </div>
          {
            openlogin?
          
          <form action="">
            <div className='mb-3'>
              <label htmlFor="email">Email/Phone</label>
              <input
                type="text"
                id="email"
                autoFocus
                className='form-control p-2 shadow-none'
                placeholder='Enter email or phone'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className='form-control p-2 shadow-none'
                placeholder='Enter password'
              />
            </div>
            <div className='mt-2'>
              <button className='btn bg-success w-100 p-2' type='button'>Login</button>
            </div>
          </form>:

           <form action="">
            <div className='mb-3'>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                autoFocus
                className='form-control p-2 shadow-none'
                placeholder='Enter name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="email">Email/Phone</label>
              <input
                type="text"
                id="email"
                autoFocus
                className='form-control p-2 shadow-none'
                placeholder='Enter email or phone'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className='form-control p-2 shadow-none'
                placeholder='Enter password'
              />
            </div>
             <div className='mb-3'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className='form-control p-2 shadow-none'
                placeholder='Enter password'
              />
            </div>
             <div className='mb-3'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className='form-control p-2 shadow-none'
                placeholder='Enter password'
              />
            </div>
             <div className='mb-3'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className='form-control p-2 shadow-none'
                placeholder='Enter password'
              />
            </div>
            <div className='mt-2'>
              <button className='btn bg-success w-100 p-2' type='button'>Create account</button>
            </div>
          </form>
}
        </div>
      </div>
    </div>
  );
};

export default Login;
