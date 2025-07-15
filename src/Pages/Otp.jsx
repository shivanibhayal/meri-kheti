import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OTP = ({ userData, onVerify }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === '1234') {  // Hardcoded OTP for demo
      onVerify();
      // Save to localStorage (you can call API here)
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h3>OTP Verification</h3>
      <form onSubmit={handleVerify}>
        <div className="mb-3">
          <label className="form-label">Enter OTP</label>
          <input type="text" className="form-control" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        </div>
        {error && <div className="text-danger mb-2">{error}</div>}
        <button type="submit" className="btn btn-success">Verify OTP</button>
      </form>
    </div>
  );
};

export default OTP;
