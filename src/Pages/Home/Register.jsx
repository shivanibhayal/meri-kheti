// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     // const [gender, setGender] = useState();
//     const [phone, setPhone] = useState();
//     const [farmerid, setFarmerid] = useState();
//     const [village, setVillage] = useState();
//     const [state, setState] = useState();                         
//     const [district, setDistrict] = useState();
//      const [pincode, setPincode] = useState();
//       const [country, setCountry] = useState();
//        const [address, setAddress] = useState();
//        const navigate=useNavigate();

//        const handleRegister=(e)=>{
//         e.preventDefault();
//         const user={email,password};
//         localStorage.setItem('user',JSON.stringify(user));
//         alert('Registration successful');
//         navigate('/login');
//        }

//     return (
//         <div className='registermain'>
//             <form action="" onSubmit={handleRegister}>
//                 <h3 className='fw-bold mb-2'> Sign up</h3>
//                 <label htmlFor='name' className='mt-3'>Name</label><br />
//                 <input type="text" id='name' name="Name" value={name} onChange={(e)=>setName(e.target.value)} className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='email' className='mt-3'>Email</label><br />
//                 <input type="email" id='email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='password' className='mt-3'>Password</label><br />
//                 <input type="password" id='password' className='border-1 rounded w-50 fw-bold' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  /><br />
//                 <label htmlFor='gender' className='mt-3'>Gender:</label><br />
//                 <label>Male</label>
//                 <input type="radio" id='gender' name="gender" value='male' className='border-1 rounded ms-2 fw-bold' />
//                 <label className='ms-2'>Female</label>
//                 <input type="radio" id='gender' name="gender" value='female' className='border-1 rounded  ms-2 fw-bold ' />
//                 <label className='ms-2'>other</label>
//                 <input type="radio" id='gender' name="gender" value='other' className='border-1 rounded  ms-2 fw-bold' /><br /><br />
//                 <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
//                     <label htmlFor='phone'>Phone</label>
//                     <span className='border-1'>+91</span>
//                     <input
//                         type="tel"
//                         maxLength="10"
//                         placeholder="Enter phone number"
//                         name="phone"
//                         id='phone'
//                         value={phone} 
//                         onChange={(e)=>setPhone(e.target.value)} 
//                         className='rounded'
//                         required
//                     />
//                 </div><br />
//                 <label htmlFor='farmer-id' className='mt-1'>Farmer Id</label><br />
//                 <input type="number" id='farmer-id' name="farmer-id" value={farmerid} onChange={(e)=>setFarmerid(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='village' className='mt-1'>Village</label><br />
//                 <input type="text" id='village' name="village"  value={village} onChange={(e)=>setVillage(e.target.value)} className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='state' className='mt-1'>State</label><br />
//                 <input type="text" id='state' name="State" value={state} onChange={(e)=>setState(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='district' className='mt-1'>District</label><br />
//                 <input type="text" id='district' name="district" value={district} onChange={(e)=>setDistrict(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='pincode' className='mt-1'>Pincode</label><br />
//                 <input type="text" name="State" id='pincode' value={pincode} onChange={(e)=>setPincode(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='country' className='mt-1'>Country</label><br />
//                 <input type="text" id='country' name="State" value={country} onChange={(e)=>setCountry(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
//                 <label htmlFor='address' className='mt-1'>Address</label><br />
//                 <input type="text" id='address' name="address" value={address} onChange={(e)=>setAddress(e.target.value)}  className='border-1 rounded w-50 fw-bold' /><br />
//                 <button type="submit" className='border-0 rounded-3  mt-3 fw-bold  p-1 loginbtn logbtn'>Register</button>
//             </form>
//         </div>
//     )
// }

// export default Register

  import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [farmerid, setFarmerid] = useState();
    const [village, setVillage] = useState();
    const [state, setState] = useState();
    const [district, setDistrict] = useState();
    const [pincode, setPincode] = useState();
    const [country, setCountry] = useState();
    const [address, setAddress] = useState();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const user = { email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful');
        navigate('/login');
    }

    return (
        <div>
            <form className='p-4  '  action="" onSubmit={handleRegister}>

                <h3 className='fw-bold   text-center '> Sign up</h3>

            <div className='d-flex flex-wrap gap-3  align-items-center justify-content-center' >

          
                <div class="form-floating mb-3 col-md-3 ">
                    <input type="name" className="form-control" name='Name' id="name" placeholder="Please Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label for="name">Enter Name</label>
                </div>

                <div class="form-floating mb-3 col-md-3">
                    <input type="email" class="form-control" id="email" name='Email' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label for="email">Email</label>
                </div>

                <div class="form-floating mb-3 col-md-3">
                    <input type="password" class="form-control" id="password" name='Password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label for="password">Password</label>
                </div>

                {/* Gender Section */}
                <div className="mb-3 col-md-3">
                    <label className="form-label d-block mb-2">Gender</label>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="other" value="Other" checked={gender === 'Other'}
                            onChange={(e) => setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="other">Other</label>
                    </div>
                </div>

                <div class="form-floating mb-3 col-md-3">
                    <input type="number" class="form-control" id="phone" name='Phone' placeholder="Enter Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label for="phone">Enter Number</label>
                </div>

                <div class="form-floating mb-3 col-md-3">
                    <input type="text" class="form-control" id="farmerId" name='FarmerId' placeholder="Enter Farmer Id" value={farmerid} onChange={(e) => setFarmerid(e.target.value)} />
                    <label for="farmerId">Enter Farmer Id</label>
                </div>





                {/* Village */}
                <div className="form-floating mb-3 col-md-3">
                    <input type="text" className="form-control" id="village" name="village" placeholder="Enter Village" value={village} onChange={(e) => setVillage(e.target.value)} />
                    <label htmlFor="village">Village</label>
                </div>

                {/* State */}
                <div className="form-floating mb-3 col-md-3">
                    <input type="text" className="form-control" id="state" name="state" placeholder="Enter State" value={state} onChange={(e) => setState(e.target.value)} />
                    <label htmlFor="state">State</label>
                </div>

                {/* District */}
                <div className="form-floating mb-3 col-md-3">
                    <input type="text" className="form-control" id="district" name="district" placeholder="Enter District" value={district} onChange={(e) => setDistrict(e.target.value)} />
                    <label htmlFor="district">District</label>
                </div>

                {/* Pincode */}
                <div className="form-floating mb-3 col-md-3">
                    <input type="number" className="form-control" id="pincode" name="pincode" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    <label htmlFor="pincode">Pincode</label>
                </div>

                {/* Country */}
                <div className="form-floating mb-3 col-md-6 ">
                    <input type="text" className="form-control" id="country" name="country" placeholder="Enter Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    <label htmlFor="country">Country</label>
                </div>

                {/* Address */}
                <div className="form-floating mb-3 col-md-8">
                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label htmlFor="address">Address</label>
                </div>
                <div className='col-12 text-center'>
                <button type="submit" className="btn btn-success">Submit</button>

                </div>
              </div>
            </form>
        </div>
    )
}

export default Register


 

