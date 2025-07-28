import React, { useState, useEffect } from "react";
import "../assets/css/login.css";
import axios from "axios";
import Styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";


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
  const [villageError, setVillageError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [district, setDistrict] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [pincode, setPincode] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [farmerId, setFarmerId] = useState('');
  const [farmerIdError, setFarmerIdError] = useState('');
  const [isExistingUser, setIsExistingUser] = useState(false);
  // const [checkMessage, setCheckMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [profilePreview, setProfilePreview] = useState(false);

  const [countryCode, setCountryCode] = useState("+91");

  const navigate = useNavigate();


  const phoneLengthByCountry = {
    "+91": 10,   // India
    "+1": 10,    // USA
    "+44": 10,   // UK
    "+971": 9,   // UAE
    "+61": 9,    // Australia
    "+81": 10    // Japan
  };

  const States = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "HimachalPradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];


  useEffect(() => {
    if (email || phone) {
      checkIfUserExists();
    }
  }, [email, phone]);

  const checkIfUserExists = async () => {
    try {
      const res = await axios.post(
        "https://b7dd71b6fa04.ngrok-free.app/api/user/register",
        {
          email,
          phone,
        }
      );
      setIsExistingUser(false);
      setCheckMessage("");
    } catch (err) {
      if (err.response?.status === 409) {
        setIsExistingUser(true);
        setCheckMessage("User with this email or phone already exists");
      }
    }
  };

  const handleOTPVerify = async () => {
    const userPhone = localStorage.getItem("userPhone");
    const enteredOTP = document.getElementById("otp")?.value;

    if (!userPhone) {
      alert("Phone number not found. Please try registering again.");
      return;
    }

    if (!enteredOTP || enteredOTP.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const res = await axios.post(
        "http://192.168.1.4:4000/api/user/verify-otp",
        {
          phone: userPhone,
          otp: enteredOTP,
        }
      );

      if (res.status === 200) {
        alert("Registration successful!");
        localStorage.removeItem("userPhone");

        // ✅ Redirect to login page
        setOpenLogin(true);
        setFormStep(1);
      } else {
        alert("OTP verification failed. Try again.");
      }
    } catch (error) {
      alert("OTP verification failed. Please check the OTP and try again.");
    }
  };


  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(file);
      setProfilePreview(URL.createObjectURL(file)); // creates temporary URL for preview
    }
  };


  const validateStep2 = () => {
    let isValid = true;
    setCountryError("");
    setStateError("");
    setDistrictError("");
    setCityError("");
    setVillageError("");
    setPincodeError("");
    setAddressError("");
    setFarmerIdError("");
    if (!country.trim()) {
      setNameError("country is required");
      isValid = false;
    }
    if (!state.trim()) {
      setNameError("state is required");
      isValid = false;
    }
    if (!district.trim()) {
      setNameError("district is required");
      isValid = false;
    }
    if (!city.trim()) {
      setNameError("city is required");
      isValid = false;
    }

    if (!village.trim()) {
      setNameError("village is required");
      isValid = false;
    }

    if (!pincode.trim()) {
      setNameError("pincode is required");
      isValid = false;
    }

    if (!address.trim()) {
      setNameError("address is required");
      isValid = false;
    }

    if (!id.trim()) {
      setNameError("Id is required");
      isValid = false;
    }
  }

  const validateStep = () => {
    let isValid = true;

    // Reset all errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setPhoneError("");
    setGenderError("");

    // Name validation
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters");
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    // Phone validation
    const requiredLength = phoneLengthByCountry[countryCode] || 10;

    if (!phone.trim()) {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^\d+$/.test(phone)) {
      setPhoneError("Phone must contain only digits");
      isValid = false;
    } else if (phone.length !== requiredLength) {
      setPhoneError(`Phone number must be ${requiredLength} digits`);
      isValid = false;
    }


    // Gender validation
    if (!gender) {
      setGenderError("Please select a gender");
      isValid = false;
    }

    // Password validation
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8 || !hasLetter || !hasNumber || !hasSpecial) {
      setPasswordError("Must be 8+ characters with letter, number & special char");
      isValid = false;
    }

    if (formStep === 1) {
      if (isExistingUser) {
        alert("User already registered with this email or phone");
        return false;
      }
    }

    if (formStep === 2) {
      if (
        !village ||
        !state ||
        !farmerId ||
        !district ||
        !pincode ||
        !address
      ) {
        alert("Please fill in all address fields.");
        return false;
      }
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setFormStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //   if (!validateStep2()) {
    //   return;
    // }


    if (formStep === 2) {
      const valid = validateStep2();
      if (!valid) return;
    }

    if (isExistingUser) {
      alert("User already registered with this email or phone.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("profileImage", profile);
    formData.append("village", village);
    formData.append("state", state);
    formData.append("farmerId", farmerId);
    formData.append("district", district);
    formData.append("pincode", pincode);
    formData.append("address", address);
    formData.append("phone", countryCode + phone);


    try {
      const response = await axios.post(
        "https://c24a05a1f47e.ngrok-free.app/api/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("otp sent");
      localStorage.setItem("userPhone", phone);
      setFormStep(3); // Go to OTP

      // setFormStep(3); // move to OTP step
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container-fluid maincontainer">
      <div className="text-center mb-3 mr-2">
        <button
          className={`border-0 borderchng px-5 py-3 ${openlogin ? "bg-success text-white" : "btn-light"
            }`}
          onClick={() => setOpenLogin(true)}
        >
          Login
        </button>
        <button
          className={`px-5 border-0 borderchng2 py-3 ${!openlogin ? "bg-success text-white" : "btn-light"
            }`}
          onClick={() => {
            setOpenLogin(false);
            setFormStep(1);
          }}
        >
          Sign-up
        </button>
      </div>

      <div className="row w-100 justify-content-center">
        <div
          className={`mt-1 ${!openlogin ? "col-md-8 col-lg-8" : "col-md-6 col-lg-5"
            }`}
        >
          {openlogin ? (
            <form>
              <div className="row w-100 changeBg">
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
                <div className="col-12 col-xl-12 mb-2">
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
              </div>
            </form>
          ) : (
            <div className="row changeBg">
              <form onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <>
                    <div className="d-flex align-items-center justify-content-center">
                      <h5 className="bg-success text-white rounded-4 p-3 w-25 fs-4 text-center">
                        Personal details
                      </h5>
                    </div>
                    <div className="row">
                      <div className="text-center">
                        <label htmlFor="profileInput">
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "60%",
                              overflow: "hidden",
                              // border: "2px dashed #ccc",
                              cursor: "pointer",
                              display: "inline-block",
                            }}
                          >
                            {profilePreview ? (
                              <img
                                src={profilePreview}
                                alt="Profile Preview"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                                <i className="bi bi-person-circle"></i>
                              </div>
                            )}
                          </div>
                        </label>

                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleProfileChange}
                          id="profileInput"
                          style={{ display: "none" }}
                        />
                      </div>

                      <div className="mb-3 col-12 col-lg-6">
                        <label>Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => { setName(e.target.value); setNameError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter name"
                        />
                        {nameError && (
                          <small className="text-danger">{nameError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label htmlFor="email">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setEmailError(false) }}
                          className="form-control shadow-none"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                        />
                        {emailError && (
                          <small className="text-danger">{emailError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(false);
                          }}
                          className="form-control shadow-none"
                          placeholder="Enter password"
                        />
                        {passwordError && (
                          <small className="text-danger">
                            {passwordError}
                          </small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>Phone <span className="text-danger">*</span></label>
                        <div className="input-group">
                          <select
                            className="form-select shadow-none"
                            style={{ maxWidth: "120px" }}
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                          >
                            <option value="+91">🇮🇳(+91)</option>
                            <option value="+1">🇺🇸(+1)</option>
                            <option value="+44">🇬🇧(+44)</option>
                            <option value="+971">🇦🇪(+971)</option>
                            <option value="+61">🇦🇺  (+61)</option>
                            <option value="+81">🇯🇵 (+81)</option>
                          </select>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                              const maxLength = phoneLengthByCountry[countryCode] || 10;
                              const input = e.target.value.replace(/\D/g, "").slice(0, maxLength); // only digits
                              setPhone(input);
                              setPhoneError(false);
                            }}
                            maxLength={phoneLengthByCountry[countryCode] || 10}
                            className="form-control shadow-none"
                            placeholder="Enter phone number"
                            required
                          />
                        </div>
                        {phoneError && (
                          <small className="text-danger">{phoneError}</small>
                        )}
                      </div>

                      <div className="mb-3 col-12 col-lg-5 m-auto">
                        <label>Gender <span className="text-danger">*</span></label>
                        <select
                          value={gender}
                          onChange={(e) => { setGender(e.target.value); setGenderError(false) }}
                          className="form-control shadow-none"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">MALE</option>
                          <option value="female">FEMALE</option>
                          <option value="other">OTHER</option>
                        </select>
                        {genderError && (
                          <small className="text-danger">{setGenderError}</small>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {formStep === 2 && (
                  <>
                    <div className="d-flex align-items-center justify-content-center">
                      <h5 className="bg-success text-white rounded-4 p-3 fs-5 w-25 text-center">
                        Other details
                      </h5>
                    </div>
                    <div className="row">
                      <div className="mb-3 col-12 col-lg-6">
                        <label>Country <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => { setCountry(e.target.value); setCountryError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter country"
                        />
                        {countryError && (
                          <small className="text-danger">{countryError}</small>
                        )}
                      </div>
                      <div className="mb-0 col-12 col-lg-6">
                        <label htmlFor="state">State <span className="text-danger">*</span></label><br />
                        <select
  name="state"
  className="form-control p-2 border rounded-3 shadow-none custom-select "
  value={state}
  onChange={(e) => {
    setState(e.target.value);
    setStateError(false);
  }}
>
  <option value="">Select State</option> 
  {States.map((stateName, index) => (
    <option key={index} value={stateName}>
      {stateName}
    </option>
  ))}
</select>

                        {/* <input
                          type="text"
                          value={state}
                          onChange={(e) => { setState(e.target.value); setStateError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter state"
                        /> */}
                        {stateError && (
                          <small className="text-danger">{stateError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>District <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={district}
                          onChange={(e) => { setDistrict(e.target.value); setDistrictError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter district"
                        />
                        {districtError && (
                          <small className="text-danger">{districtError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>City <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => { setCity(e.target.value); setCityError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter city"
                        />
                        {cityError && (
                          <small className="text-danger">{cityError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>Village <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={village}
                          onChange={(e) => { setVillage(e.target.value); setVillageError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter village"
                        />
                        {villageError && (
                          <small className="text-danger">{villageError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>Pincode <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={pincode}
                          onChange={(e) => { setPincode(e.target.value); setPincodeError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter pincode"
                        />
                        {pincodeError && (
                          <small className="text-danger">{pincodeError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>Address <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => { setAddress(e.target.value); setAddressError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter address"
                        />
                        {addressError && (
                          <small className="text-danger">{addressError}</small>
                        )}
                      </div>
                      <div className="mb-3 col-12 col-lg-6">
                        <label>Farmer ID <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          value={farmerId}
                          onChange={(e) => { setFarmerId(e.target.value); setFarmerIdError(false) }}
                          className="form-control shadow-none"
                          placeholder="Enter farmer ID"
                        />
                        {farmerIdError && (
                          <small className="text-danger">{farmerIdError}</small>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {formStep === 3 && (
                  <div className="text-center">
                    <h5 className="bg-success text-white rounded-4 m-auto mb-3 p-3 w-25 text-center">
                      OTP Verification
                    </h5>
                    <input
                      id="otp"
                      type="text"
                      className="p-2 mb-3 rounded"
                      placeholder="Enter 6 digit OTP"
                    />
                    <br />
                    <button
                      type="button"
                      className="btn bg-success text-white"
                      onClick={handleOTPVerify}
                    >
                      Verify OTP
                    </button>
                  </div>
                )}

                <div className="mt-2 d-flex justify-content-end gap-2 w-100">
                  {formStep === 2 && (
                    <button
                      type="button"
                      className="border-0 p-2 rounded-4 formbtn"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                  )}
                  {formStep === 1 && (
                    <button
                      type="button"
                      className="border-0 px-3 py-2 formbtn rounded-4"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                  {formStep === 2 && (
                    <button
                      type="submit"
                      className="border-0 p-2 formbtn rounded-4"
                    >
                      Submit
                    </button>
                  )}
                </div>
                {formStep < 3 && (
                  <p className="text-success float-end">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setOpenLogin(true)}
                      className="border-0 bg-transparent text-success text-decoration-underline"
                    >
                      Login
                    </button>
                  </p>
                )}

              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;