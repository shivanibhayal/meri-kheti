import React, { useState } from "react";
import "../assets/css/login.css";
import axios from "axios";
import Styles from "./Login.module.css";

const Login = () => {
  const [openlogin, setOpenLogin] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");
  const [village, setVillage] = useState("");
  const [state, setState] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const [phoneError, setPhoneError] = useState(false);
const [passwordError, setPasswordError] = useState(false);


  // const validateStep = () => {
  //   if (formStep === 1) {
  //     return name && email && password && phone && gender;
  //   }

  //   if (formStep === 2) {
  //     return village && state && farmerId && district && pincode && address;
  //   }
  //   return false;
  // };

  const validateStep = () => {
  let isValid = true;

  setPhoneError(false);
  setPasswordError(false);

  if (formStep === 1) {
    if (!name || !email || !password || !phone || !gender) {
      alert("Please fill in all fields");
      return false;
    }

    // Validate phone
    if (phone.length !== 10 || isNaN(phone)) {
      setPhoneError(true);
      isValid = false;
    }

    // Validate password
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8 || !hasLetter || !hasNumber || !hasSpecial) {
      setPasswordError(true);
      isValid = false;
    }

    // if (!isValid) {
    //   // alert("Please correct the highlighted fields.");
    //   return false;
    // }

    return isValid;
  }

  if (formStep === 2) {
    if (!village || !state || !farmerId || !district || !pincode || !address) {
      alert("Please fill in all address fields.");
      return false;
    }
    return true;
  }

  return false;
};


  const handleNext = () => {
    if (validateStep()) {
      setFormStep((prev) => prev + 1);
    }
    // } else {
    //   alert(
    //     // "Please fill all required fields before continuing.",
    //     // name,
    //     // email,
    //     // password,
    //     // phone,
    //     // gender,
    //     // profile
    //   );
    // }
  };

  const handlePrevious = () => {
    setFormStep((prev) => prev - 1);
  };

    const handleSubmit =(e) => {
      e.preventDefault();
      axios.post('http://192.168.1.4:4000/api/user/register',{
        name:name,
        email:email,
        password:password,
        phone:phone,
        gender:gender,
        profile:profile,
        village:village,
        state:state,
        farmerId:farmerId,
        district:district,
        pincode:pincode,
        address:address
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
            openlogin ? "bg-success text-white" : "btn-light"
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
                  <button
                    className="border-0 rounded-4 formbtn w-100 p-2"
                    type="button"
                  >
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
              <form onSubmit={handleSubmit} >
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
                          onChange={(e) => setName(e.target.value)}
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
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) =>{setPassword(e.target.value);setPasswordError(false);}}
                          className="form-control shadow-none"
                          placeholder="Enter password"
                        />
                        {passwordError && (
    <small className="text-danger">
      Must be 8+ characters with letter, number & special char
    </small>
  )}
                      </div>

                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => {
      setPhone(e.target.value);
      setPhoneError(false);
    }}
                          className="form-control shadow-none"
                          placeholder="Enter phone number"
                        />
                        {phoneError && (
    <small className="text-danger">Phone must be exactly 10 digits</small>
  )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Gender</label>
                        <select
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="form-control shadow-none"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">MALE</option>
                          <option value="female">FEMALE</option>
                          <option value="other">OTHER</option>
                        </select>
                      </div>

                      <div className="mb-3 col-12 col-lg-6 col-md-6">
                        <label>Profile Picture</label>
                        <input
                          type="file"
                          id="profile"
                          onChange={(e) => setProfile(e.target.files[0])}
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
                          onChange={(e) => setVillage(e.target.value)}
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
                          onChange={(e) => setState(e.target.value)}
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
                          onChange={(e) => setFarmerId(e.target.value)}
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
                          onChange={(e) => setDistrict(e.target.value)}
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
                          onChange={(e) => setPincode(e.target.value)}
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
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control shadow-none"
                          placeholder="Enter address"
                        />
                      </div>
                    </div>
                  </>
                )}
                {formStep===3 &&(
                  <div className="text-center">  
                 <h5 className="bg-success  text-white rounded-4 m-auto mb-3 p-3 w-25 text-center ">
                      OTP Verification
                      </h5>
                  <input type="text" className="p-2 mb-3 rounded" placeholder="enter 6 digit otp" /><br/>
                  <button className="btn bg-success ms-2 text-white">Verify otp</button>
                  </div>
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
                        onClick={handleNext}
                      >
                        Submit
                      </button>
                      <br />
                      <br />
                    </>
                  )}
                </div>
                <p className="text-success float-end">
                  Already have an account? 
                  <button
                    type="button"
                    onClick={() => setOpenLogin(true)}
                    className="border-0 bg-transparent text-success text-decoration-underline"
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