import React, { useState } from "react";
import "../assets/css/login.css";
import axios from 'axios';
import Styles from "./Login.module.css";

const Login = () => {
  const [openlogin, setOpenLogin] = useState(false);
  const [formStep, setFormStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
     const [password, setPassword] = useState('');
      const [phone, setPhone] = useState('');
       const [gender, setGender] = useState('');
        const [profile, setProfile] = useState('');
         const [village, setVillage] = useState('');
          const [state, setState] = useState('');
           const [farmerId, setFarmerId] = useState('');
            const [district, setDistrict] = useState('');
             const [pincode, setPincode] = useState('');
              const [address, setAddress] = useState('');
 

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [id]: value }));
  // };

  // const handleFileChange = (e) => {
  //   setFormData((prev) => ({ ...prev, profile: e.target.files[0] }));
  // };

  const validateStep = () => {
    if (formStep === 1) {
      return name && email && password && phone && gender && profile;
    }
    
    if (formStep === 2) {
      return (
        village &&
        state &&
        farmerId &&
        district &&
       pincode &&
        address
      );
    }
    return false;
  };

  const handleNext = () => {
    if (validateStep()) {
      setFormStep((prev) => prev +1  );
       
      alert("Please fill all required fields before continuing." + profile+" " +name);
    } else {
      alert("Please fill all required fields before continuing.", name,email,password,phone, gender, profile  );
    }
  };

  const handlePrevious = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    axios.post('http://192.168.1.10:4000/api/user/register',{
      name:name,

    })
.then(result=>{
  console.log(result);
})
.catch(error=>{
  console.log(error);
  
}

)

  }; 

  return (
    <div className="container-fluid maincontainer">
      <div className="text-center mb-3 mr-2">
        <button
          className={`border-0 borderchng px-5 py-3 ${
            openlogin ? "bg-success text-white":"btn-light"
          }`}
          onClick={() => setOpenLogin(true)}
        >
          Login
        </button>
        <button
          className={` px-5 border-0 borderchng2 py-3 ${
            !openlogin ? "bg-success text-white" : "btn-light"
          }`}
          onClick={() => {
            setOpenLogin(false);
            setFormStep(1);
          }}
        >
          Sign-up
        </button>
      </div>

      <div className="row w-100 justify-content-center ">
        <div
          className={` mt-1 ${
            !openlogin ? "col-md-8 col-lg-8" : "col-md-6 col-lg-5"
          }`}
        >
          {openlogin ? (
            <form action=" " className="">
              <div className="row w-100 changeBg ">
                <div className="col-12 col-xl-12 mb-2">
                  <label htmlFor="email">Email/Phone</label>
                  <input
                    type="text"
                    id="email"
                    autoFocus
                    className="form-control p-2 shadow-none"
                    placeholder="Enter email or phone"
                  />
                </div>
                <div className=" col-12 col-xl-12 mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control p-2 shadow-none"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <span>
                    <a href="#" className="text-success text-decoration-none">
                      forgot password?
                    </a>
                  </span>
                </div>
                <div className="mt-2">
                  <button className="border-0 rounded-4 formbtn w-100 p-2" type="button">
                    Login
                  </button>
                </div>
                <div>
                  <span className="text-success">
                    Dont have an account?{" "}
                    <span
                      className={`border-0 py-2 ${
                        !openlogin ? "bg-success text-white" : "btn-light"
                      }`}
                      onClick={() => setOpenLogin(false)}
                      type="button"
                    >
                      <a href="" className="text-success">
                        Sign-up
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </form>
          ) : (
            <div className="row changeBg">
              <form onSubmit={handleSubmit} className="">
                {/* STEP 1 */}
                {formStep === 1 && (
                  <>
                    <div className="d-flex align-items-center justify-content-center">
                      <h5 className="bg-success text-white rounded-4 p-2 w-25 text-center">
                        Personal details
                      </h5>
                    </div>
                    <div className="row ">
                      <div className="mb-3 col-12 col-lg-6 col-md-6 ">
                        <label>Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter name"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6 ">
                        <label>Email</label>
                        <input
                          type="email"  
                          name="email"
                          id="email"
                          value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter password"
                        />
                      </div>

                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                           onChange={(e)=>setPhone(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Gender</label>
                        <select
                          id="gender"
                          value={gender}
                           onChange={(e)=>setGender(e.target.value)}
                          className="form-control shadow-none"
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
                         onChange={(e)=>setProfile(e.target.value[0])}
                          className="form-control shadow-none"
                          accept="image/*"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {formStep === 2 && (
                  <>
                    <div className="d-flex align-items-center justify-content-center">
                      <h5 className="bg-success text-white rounded-4 p-2 w-25 text-center ">
                        Other details
                      </h5>
                    </div>
                    <div className="row ">
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Village</label>
                        <input
                          type="text"
                          id="village"
                          value={village}
                        onChange={(e)=>setVillage(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter village"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>State</label>
                        <input
                          type="text"
                          id="state"
                          value={state}
                            onChange={(e)=>setState(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter state"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Farmer ID</label>
                        <input
                          type="text"
                          id="farmerId"
                          value={farmerId}
                           onChange={(e)=>setFarmerId(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter farmer ID"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>District</label>
                        <input
                          type="text"
                          id="district"
                          value={district}
                         onChange={(e)=>setDistrict(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter district"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Pincode</label>
                        <input
                          type="text"
                          id="pincode"
                          value={pincode}
                          onChange={(e)=>setPincode(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter pincode"
                        />
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6 ">
                        <label>Address</label>
                        <input
                          type="text"
                          id="address"
                          value={address}
                          onChange={(e)=>setAddress(e.target.value)}
                          className="form-control shadow-none"
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
                      className=" border-0 p-2 rounded-4 formbtn"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                  )}
                  {formStep < 2 && (
                    <button
                      type="button"
                      className="border-0 px-3 py-2 formbtn rounded-4"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                  {formStep === 2 && (
                    <>
                      <button
                        type="submit"
                        className="border-0 p-2 formbtn rounded-4"
                      >
                        Submit
                      </button>
                      <br />
                      <br />
                    </>
                  )}
                </div>
                <p className="text-success float-end">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setOpenLogin(true)}
                    className={`border-0 bg-transparent text-success text-decoration-underline`}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </button>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
