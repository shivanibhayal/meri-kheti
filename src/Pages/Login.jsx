import React from 'react'

const Login = () => {
  return (
    <div className='loginmain'>
    <div>
<form action="/login" method="POST">
<h3 className='fw-bold mb-2'>Login here</h3>
<label className='mt-3'>Email/Phone</label><br/>
  <input type="text" name="email" className='border-1 rounded w-50'/><br/>
  <label className='mt-3'>Password</label><br/>
  <input type="password" className='border-1 rounded w-50' name="password"/><br/>
  <button type="submit" className='border-0 rounded-3  mt-3 fw-bold  p-1 loginbtn logbtn'>Login</button>
</form>
    </div>
    </div>
  )
}

export default Login
