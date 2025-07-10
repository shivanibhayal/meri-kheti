import React, { useState } from 'react';
import '../assets/css/login.css';
import Styles from './Login.module.css'


const Login = () => {
  const [openlogin, setOpenLogin] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    profile: '',
    village: '',
    state: '',
    farmerId: '',
    district: '',
    pincode: '',
    address: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profile: e.target.files[0] }));
  };

  const validateStep = () => {
    if (formStep === 1) {
      return formdata.name && formdata.email && formdata.password;
    }
    if (formStep === 2) {
      return formdata.phone && formdata.gender && formdata.profile;
    }
    if (formStep === 3) {
      return (
        formdata.village &&
        formdata.state &&
        formdata.farmerId &&
        formdata.district &&
        formdata.pincode &&
        formdata.address
      );
    }
    return false;
  };

  const handleNext = () => {
    if (validateStep()) {
      setFormStep((prev) => prev + 1);
    } else {
      alert('Please fill all required fields before continuing.');
    }
  };

  const handlePrevious = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) {
      alert('Please fill all required fields.');
      return;
    }

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
        setFormStep(1);
      } else {
        alert(`Error: ${result.message || "Registration failed."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className='container pt-5'>
      <div className='text-center mb-3'>
        <button
          className={`btn mx-2 ${openlogin ? 'btn-success' : 'btn-outline-success'}`}
          onClick={() => setOpenLogin(true)}
        >
          Login
        </button>
        <button
          className={`btn mx-2 ${!openlogin ? 'btn-success' : 'btn-outline-success'}`}
          onClick={() => {
            setOpenLogin(false);
            setFormStep(1);
          }}
        >
          Sign-up
        </button>
      </div>

      <div className='row justify-content-center'>
        <div className='col-md-8 col-lg-6 changeBg'>
          {openlogin ? (
            
            <form>
              <div className='mb-3'>
                <label>Email or Phone</label>
                <input className='form-control' placeholder='Enter email or phone' />
              </div>
              <div className='mb-3'>
                <label>Password</label>
                <input type='password' className='form-control' placeholder='Enter password' />
              </div>
              <button className='btn btn-success w-100' type='submit'>Login</button>
            </form>
          ) : (
            <form className='d-flex flex-wrap gap-2    ' onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {formStep === 1 && (
                <>
                  <div className='mb-3 col-5  '>
                    <label>Name</label>
                    <input
                      type='text'
                      id='name'
                      value={formdata.name}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter name'
                    />
                  </div>
                  <div className='mb-3 col-6 '>
                    <label>Email</label>
                    <input
                      type='email'
                      id='email'
                      value={formdata.email}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter email'
                    />
                  </div>
                  <div className='mb-3 col-5'>
                    <label>Password</label>
                    <input
                      type='password'
                      id='password'
                      value={formdata.password}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter password'
                    />
                  </div>

                  <div className='mb-3 col-6'>
                    <label>Phone</label>
                    <input
                      type='tel'
                      id='phone'
                      value={formdata.phone}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter phone number'
                    />
                  </div>

                </>
              )}

              {/* STEP 2 */}
              {formStep === 2 && (
                <>
                  
                  <div className='mb-3'>
                    <label>Gender</label>
                    <select
                      id='gender'
                      value={formdata.gender}
                      onChange={handleChange}
                      className='form-control'
                    >
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  <div className='mb-3'>
                    <label>Profile Picture</label>
                    <input
                      type='file'
                      id='profile'
                      onChange={handleFileChange}
                      className='form-control'
                      accept='image/*'
                    />
                  </div>
                  <div className='mb-3'>
                    <label>Village</label>
                    <input
                      type='text'
                      id='village'
                      value={formdata.village}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter village'
                    />
                  </div>
                  <div className='mb-3'>
                    <label>State</label>
                    <input
                      type='text'
                      id='state'
                      value={formdata.state}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter state'
                    />
                  </div>

                </>
              )}

              {/* STEP 3 */}
              {formStep === 3 && (
                <>
                  
                  <div className='mb-3'>
                    <label>Farmer ID</label>
                    <input
                      type='text'
                      id='farmerId'
                      value={formdata.farmerId}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter farmer ID'
                    />
                  </div>
                  <div className='mb-3'>
                    <label>District</label>
                    <input
                      type='text'
                      id='district'
                      value={formdata.district}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter district'
                    />
                  </div>
                  <div className='mb-3'>
                    <label>Pincode</label>
                    <input
                      type='text'
                      id='pincode'
                      value={formdata.pincode}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter pincode'
                    />
                  </div>
                  <div className='mb-3'>
                    <label>Address</label>
                    <input
                      type='text'
                      id='address'
                      value={formdata.address}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Enter address'
                    />
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className='d-flex justify-content-between'>
                {formStep > 1 && (
                  
                  
                  <button type='button' className='btn btn-outline-secondary' onClick={handlePrevious}>
                    Previous
                  </button>
           
                )}
                {formStep < 3 && (
                  <button type='button' className='btn btn-success ms-auto' onClick={handleNext}>
                    Next
                  </button>
                )}
                {formStep === 3 && (
                  <button type='submit' className='btn btn-primary ms-auto'>
                    Submit
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
