import React, { useState } from "react";
 // custom CSS for sliding

const AuthSlider = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-box shadow-lg">
        <div className={`slider-container ${isLogin ? "show-login" : "show-signup"}`}>
          {/* Login Form */}
          <div className="form-box login">
            <h3 className="text-center mb-4">Login</h3>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <button className="btn btn-primary w-100">Login</button>
            </form>
          </div>

          {/* Signup Form */}
          <div className="form-box signup">
            <h3 className="text-center mb-4">Sign Up</h3>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Phone Number" required />
              </div>
              <button className="btn btn-success w-100">Sign Up</button>
            </form>
          </div>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-panel">
          {isLogin ? (
            <>
              <h5>Don't have an account?</h5>
              <button className="btn btn-outline-primary" onClick={() => setIsLogin(false)}>
                Go to Signup →
              </button>
            </>
          ) : (
            <>
              <h5>Already have an account?</h5>
              <button className="btn btn-outline-success" onClick={() => setIsLogin(true)}>
                ← Back to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthSlider;
