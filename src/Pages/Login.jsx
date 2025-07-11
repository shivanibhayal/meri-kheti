import React, { useState } from "react";
import "../assets/css/login.css";
import Styles from "./Login.module.css";

const Login = () => {
  const [openlogin, setOpenLogin] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    profile: "",
    village: "",
    state: "",
    farmerId: "",
    district: "",
    pincode: "",
    address: "",
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
      alert("Please fill all required fields before continuing.");
    }
  };

  const handlePrevious = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const data = new FormData();
      for (const key in formdata) {
        data.append(key, formdata[key]);
      }

      const response = await fetch(
        "http://192.168.1.10:4000/api/user/register",
        {
          method: "POST",
          body: data,
        }
      );

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
    <div className="container pt-5">
      <div className="text-center mb-3">
        <button
         className={`border-0 borderchng px-5 py-3 ${openlogin ? 'bg-success text-white' :'btn-light'}`}
          onClick={() => setOpenLogin(true)}
        >
          Login
        </button>
        <button
          className={` px-5 border-0 borderchng2 py-3 ${!openlogin ? 'bg-success text-white' :'btn-light'}`}
          onClick={() => {
            setOpenLogin(false);
            setFormStep(1);
          }}
        >
          Sign-up
        </button>
      </div>

      <div className='row w-100 justify-content-center p-3 mb-5 '>
        <div className={`${!openlogin ? 'col-md-10 col-lg-10' : 'col-md-6 col-lg-5'}`}>
          {
            openlogin?
          <form action=" " className="">
            <div className='row w-100 changeBg'>
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
          </form>
           : (
            <div className="row changeBg">
            <form
            
              onSubmit={handleSubmit}
              className="bg-success"
            >
              {/* STEP 1 */}
              {formStep === 1 && (
                <>
                 <h4 className="bg-success text-white rounded-1 text-center p-2 heading">Personal details</h4>
                <div className="row ">
                  
                  <div className="mb-3 col-12 col-lg-6 col-md-6 ">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formdata.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="mb-3 col-12 col-lg-6 col-md-6 ">
                    <label>Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formdata.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>Password</label>
                    <input
                      type="password"
                      id="password"
                      value={formdata.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formdata.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                     <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>Gender</label>
                    <select
                      id="gender"
                      value={formdata.gender}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>Profile Picture</label>
                    <input
                      type="file"
                      id="profile"
                      onChange={handleFileChange}
                      className="form-control"
                      accept="image/*"
                    />
                  </div>
                    </div>
                </>
              )}

              {/* STEP 2 */}
              {formStep === 2 && (
                <>
                <h4 className="bg-success text-white rounded-1 text-center p-2 heading">Other details</h4>
               <div className="row ">
                
                  <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>Village</label>
                    <input
                      type="text"
                      id="village"
                      value={formdata.village}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter village"
                    />
                  </div>
                  <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>State</label>
                    <input
                      type="text"
                      id="state"
                      value={formdata.state}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter state"
                    />
                  </div>
                  <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>Farmer ID</label>
                    <input
                      type="text"
                      id="farmerId"
                      value={formdata.farmerId}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter farmer ID"
                    />
                  </div>
                  <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>District</label>
                    <input
                      type="text"
                      id="district"
                      value={formdata.district}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter district"
                    />
                </div>
                 <div className="mb-3 col-12 col-lg-6 col-md-6">
                    <label>Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      value={formdata.pincode}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter pincode"
                    />
                  </div>
                  <div className="mb-3 col-12 col-lg-6 col-md-6 ">
                    <label>Address</label>
                    <input
                      type="text"
                      id="address"
                      value={formdata.address}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter address"
                    />
                  </div>
                 </div>
                </>
              )}

          
              {/* Buttons */}
  <div className="mt-2 d-flex flex-row align-items-center justify-content-end gap-2  w-100">
  {formStep > 1 && (
    <button
      type="button"
      className=" border-0 p-2 rounded formbtn"
      onClick={handlePrevious}
    >
      Previous
    </button>
  )}
  {formStep < 2 && (
    <button
      type="button"
      className="border-0 px-3 py-2 formbtn rounded-2"
      onClick={handleNext}
    >
      Next
    </button>
  )}
  {formStep === 2 && (
    <> 
    <button type="submit" className="border-0 p-2 formbtn rounded-2">
      Submit
    </button><br/><br/>
    
    </>
  )}
</div>
 <p className='text-success float-end'>Already have an account? <span className={`border-0   py-2 ${openlogin ? 'bg-success text-white' :'btn-light'}`} 
    onClick={()=>setOpenLogin(true)} type='button'><a href="" className='text-success'>Login</a></span></p>

            </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
