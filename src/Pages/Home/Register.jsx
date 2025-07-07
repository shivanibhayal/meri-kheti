import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [farmerid, setFarmerid] = useState();
    const [village, setVillage] = useState();
    const [state, setState] = useState();                         
    const [district, setDistrict] = useState();
     const [pincode, setPincode] = useState();
      const [country, setCountry] = useState();
       const [address, setAddress] = useState();
       const navigate=useNavigate();

       const handleRegister=(e)=>{
        e.preventDefault();
        const user={email,password};
        localStorage.setItem('user',JSON.stringify(user));
        alert('Registration successful');
        navigate('/login');
       }

    return (
        <div className='registermain'>
            <form action="" onSubmit={handleRegister}>
                <h3 className='fw-bold mb-2'> Sign up</h3>
                <label className='mt-3'>Name</label><br />
                <input type="text" name="Name" value={name} onChange={(e)=>setName(e.target.value)} className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-3'>Email</label><br />
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-3'>Password</label><br />
                <input type="password" className='border-1 rounded w-50 fw-bold' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  /><br />
                <label className='mt-3'>Gender:</label><br />
                <label>Male</label>
                <input type="radio" name="gender" value='male' className='border-1 rounded ms-2 fw-bold' />
                <label className='ms-2'>Female</label>
                <input type="radio" name="gender" value='female' className='border-1 rounded  ms-2 fw-bold ' />
                <label className='ms-2'>other</label>
                <input type="radio" name="gender" value='other' className='border-1 rounded  ms-2 fw-bold' /><br /><br />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                    <label>Phone</label>
                    <span className='border-1'>+91</span>
                    <input
                        type="tel"
                        maxLength="10"
                        placeholder="Enter phone number"
                        name="phone"
                        value={phone} 
                        onChange={(e)=>setPhone(e.target.value)} 
                        required
                    />
                </div><br />
                <label className='mt-1'>Farmer Id</label><br />
                <input type="number" name="farmer-id" value={farmerid} onChange={(e)=>setFarmerid(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-1'>Village</label><br />
                <input type="text" name="village"  value={village} onChange={(e)=>setVillage(e.target.value)} className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-1'>State</label><br />
                <input type="text" name="State" value={state} onChange={(e)=>setState(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-1'>District</label><br />
                <input type="text" name="district" value={district} onChange={(e)=>setDistrict(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-1'>Pincode</label><br />
                <input type="text" name="State" value={pincode} onChange={(e)=>setPincode(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-1'>Country</label><br />
                <input type="text" name="State" value={country} onChange={(e)=>setCountry(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
                <label className='mt-1'>Address</label><br />
                <input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
                <button type="submit" className='border-0 rounded-3  mt-3 fw-bold  p-1 loginbtn logbtn'>Register</button>
            </form>
        </div>
    )
}

export default Register
