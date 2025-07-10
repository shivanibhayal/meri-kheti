import React, { useEffect, useState } from 'react';
import '../assets/css/login.css';

const Login = () => {
  const [openlogin,setOpenLogin]=useState(false);
  const [formdata,setFormData]=useState(
    {
      name:"",
      email: '',
    password: '',
    phone: '',
    village: '',
    state: '',
    farmerId: '',
    district: '',
    pincode: '',
    address: '',
    profile: '',
    gender:'',
    }
  );

 const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, profile: e.target.files[0] }));
  };

const handleSubmit = async (e) => {
   e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formdata) {
        data.append(key, formdata[key]);
      }

      const response = await fetch("http://192.168.1.10:4000/api/user/register", {
        method: "POST",
        body: data,
      });

const result = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        setOpenLogin(true);
      } else {
        alert(`Error: ${result.message || "Registration failed."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }


    }








//   const getPosts=async()=>{
//     const response=await fetch("http://192.168.1.10:4000/api/user/register",{
//       method:"GET",
//   });
//   return await response.json();
//   }

//   useEffect(()=>{
// getPosts().then((name)=>console.log(name));
// },[]);
  return (
    <div className='container min-vh-100  pt-5 loginmaindiv'>
          <div className='text-center w-100 mb-2'>
            <button  className={`border-0 borderchng px-5 py-2 ${openlogin ? 'bg-success text-white' :'btn-light'}`} onClick={()=>setOpenLogin(true)} type='button' >Login</button>
            <button  className={` px-5 border-0 borderchng2 py-2 ${!openlogin ? 'bg-success text-white' :'btn-light'}`} onClick={()=>setOpenLogin(false)} type='button'>Sign-up</button>
          </div>
      <div className='row w-100 justify-content-center p-3 mb-5'>
        <div className={`${!openlogin ? 'col-md-10 col-lg-10' : 'col-md-6 col-lg-5'}`}>
          {
            openlogin?
          <form action="">
            <div className='row w-100'>
            <div className='col-12 col-xl-12  mb-2'>
              <label htmlFor="email">Email/Phone</label>
              <input
                type="text"
                id="email"
                autoFocus
                className='form-control p-2 shadow-none'
                placeholder='Enter email or phone'
              />
            </div>
            <div className=' col-12 col-xl-12 mb-2'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className='form-control p-2 shadow-none'
                placeholder='Enter password'
              />
            </div>
            <div>
              <span><a href="#" className='text-success text-decoration-none'>forgot password?</a></span>
            </div>
            <div className='mt-2'>
              <button className='btn formbtn w-100 p-2' type='button'>Login</button>
            </div>
             <div>
    <span className='text-success'>Dont have an account? <span className={`border-0 py-2 ${!openlogin ? 'bg-success text-white' :'btn-light'}`} 
    onClick={()=>setOpenLogin(false)} type='button'><a href="" className='text-success'>Sign-up</a></span></span>
  </div>
       </div>
          </form>:

          <form action="" onSubmit={handleSubmit}>
  <div className='row '>
    <div className='col-12 col-md-6 col-lg-6 mb-2'>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={formdata.name}
        onChange={handleChange}
        autoFocus
        className='form-control p-2 shadow-none'
        placeholder='Enter name'
      />
    </div>
    <div className='col-12 col-md-6 col-lg-6 mb-2'>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={formdata.email}
        onChange={handleChange}
        className='form-control p-2 shadow-none'
        placeholder='Enter email or phone'
      />
    </div>
    <div className='col-12 col-md-6 col-lg-6 mb-2'>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formdata.password}
        onChange={handleChange}
        className='form-control p-2 shadow-none'
        placeholder='Enter password'
      />
    </div>
    <div className='col-12 col-md-6 col-lg-6 mb-2'>
  <label htmlFor="phone">Phone</label>
  <div className="input-group">
    <span className="input-group-text">+91</span>
    <input
      type="tel"
      id="phone"
       value={formdata.phone}
        onChange={handleChange}
      className="form-control p-2 shadow-none"
      placeholder="Enter phone number"
    />
  </div>
</div>
<div className='col-12 col-md-6 col-lg-6 mb-2'>
  <label htmlFor="gender">Gender</label>
  <select
    id="gender"
    className='form-control p-2 shadow-none'
    value={formdata.gender}
    onChange={handleChange}
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
<div className='col-12 col-md-6 col-lg-6 mb-2'>
  <label htmlFor="profile">Profile Picture</label>
  <input
    type="file"
    id="profile"
        onChange={handleFileChange}
    accept="image/*"
    className="form-control p-2 shadow-none"
  />
</div>
     <div className='col-12 col-md-6 col-lg-6 mb-2'>
    <label htmlFor="village">Village</label>
    <input
      type="text"
      id="village"
       value={formdata.village}
        onChange={handleChange}
      className='form-control p-2 shadow-none'
      placeholder='Enter village'
    />
  </div>
  <div className='col-12 col-md-6 col-lg-6 mb-2'>
    <label htmlFor="state">State</label>
    <input
      type="text"
      id="state"
       value={formdata.state}
    onChange={handleChange}
      className='form-control p-2 shadow-none'
      placeholder='Enter state'
    />
  </div>
  <div className='col-12 col-md-6 col-lg-6 mb-2'>
    <label htmlFor="farmerId">Farmer ID</label>
    <input
      type="text"
      id="farmerId"
       value={formdata.farmerId}
    onChange={handleChange}
      className='form-control p-2 shadow-none'
      placeholder='Enter farmer ID'
    />
  </div>
  <div className='col-12 col-md-6 col-lg-6 mb-2'>
    <label htmlFor="district">District</label>
    <input
      type="text"
      id="district"
       value={formdata.district}
    onChange={handleChange}
      className='form-control p-2 shadow-none'
      placeholder='Enter district'
    />
  </div>
  <div className='col-12 col-md-6 col-lg-6 mb-2'>
    <label htmlFor="pincode">Pincode</label>
    <input
      type="text"
      id="pincode"
       value={formdata.pincode}
    onChange={handleChange}
      className='form-control p-2 shadow-none'
      placeholder='Enter pincode'
    />
  </div>
 
    <div className='col-12 col-md-6 col-lg-6 mb-2'>
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
         value={formdata.address}
    onChange={handleChange}
        className='form-control p-2 shadow-none'
        placeholder='Enter address'
      />
    </div>
  </div>
  <div className='mt-2 text-center'>
    <button className='btn  formbtn px-5 py-2' type='submit'>Create account</button>
    <p className='text-success'>Already have an account? <span className={`border-0   py-2 ${openlogin ? 'bg-success text-white' :'btn-light'}`} 
    onClick={()=>setOpenLogin(true)} type='button'><a href="" className='text-success'>Login</a></span></p>
  </div>
  <div>
  </div>
</form>

}
        </div>
      </div>
    </div>
  );
};

export default Login;
