import React from 'react'

const Login = () => {
  return (
    <div className='loginmain d-fl'>
    <div>
<form action="/login" method="POST">
<h3 className='fw-bold mb-2'>Login here</h3>
<label className='mt-3'>Email/Phone</label><br/>
  <input type="text" name="email" className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-3'>Password</label><br/>
  <input type="password" className='border-1 rounded w-50 fw-bold' name="password"/><br/>
  <button type="submit" className='border-0 rounded-3  mt-3 fw-bold  p-1 loginbtn logbtn'>Login</button>
</form>
    </div>


<div className='mt-5'>
    <form action="" method="POST">
        <h3 className='fw-bold mb-2'> Sign up</h3>
<label className='mt-3'>Name</label><br/>
  <input type="text" name="Name" className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-3'>Email</label><br/>
  <input type="email" name="email" className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-3'>Password</label><br/>
  <input type="password" className='border-1 rounded w-50 fw-bold' name="password"/><br/>
  <label className='mt-3'>Gender:</label><br/>
  <label>Male</label>
  <input type="radio" name="gender" value='male' className='border-1 rounded ms-2 fw-bold'/>
  <label className='ms-2'>Female</label>
    <input type="radio" name="gender" value='female' className='border-1 rounded  ms-2 fw-bold '/>
     <label className='ms-2'>other</label>
      <input type="radio" name="gender" value='other' className='border-1 rounded  ms-2 fw-bold'/><br/><br/>
      <div style={{ display: 'flex', alignItems: 'center',marginTop:'8px' }}>
        <label>Phone</label>
  <span className='border-1'>+91</span>
  <input
    type="tel"
    maxLength="10"
    placeholder="Enter phone number"
    name="phone"
    required
  />
</div><br/>
<label className='mt-1'>Farmer Id</label><br/>
  <input type="number" name="farmer-id" className='border-1 rounded w-50 fw-bold'/><br/>
<label className='mt-1'>Village</label><br/>
  <input type="text" name="village" className='border-1 rounded w-50 fw-bold'/><br/>
<label className='mt-1'>State</label><br/>
  <input type="text" name="State" className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-1'>District</label><br/>
  <input type="text" name="district" className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-1'>Pincode</label><br/>
  <input type="text" name="State" className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-1'>Country</label><br/>
  <input type="text" name="State" className='border-1 rounded w-50 fw-bold'/><br/>
  <label className='mt-1'>Address</label><br/>
  <input type="text" name="address" className='border-1 rounded w-50 fw-bold'/><br/>
  <button type="submit" className='border-0 rounded-3  mt-3 fw-bold  p-1 loginbtn logbtn'>Register</button>
    </form>
</div>

    </div>
  )
}

export default Login
