import React, { useState } from 'react';
import img from '../assets/images/khetilogo.png';
import styles from '../assets/css/Navbar.module.css';
import { CiSearch } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom'; 

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.fixedNavbar}`}>
        <div className="container-fluid justify-content-between align-items-center d-flex">
          <Link className="navbar-brand" to="/khetilogo">
            <img src={img} alt="logo" className={`img-fluid ${styles.navimg}`} />
          </Link>

          {/* Hamburger button */}
          <button className="navbar-toggler" type="button" onClick={handleSidebarToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Large screen nav items */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
            {/* Your full nav ul goes here */}
            <ul className="navbar-nav gap-2 fw-bold">
              <li className="nav-item">
                <NavLink to="#" className="nav-link">Crops</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link">Storage</NavLink>
              </li>
              <li className="nav-item">
                <CiSearch className="fs-4 mt-2" onClick={() => setOpenSearch(!openSearch)} />
              </li>
              <li>
                <Link to="/login">
                  <button className={`btn bg-success ms-2 text-white navloginbtn mt-1 px-3 ${styles.navLoginBtn}`}>Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="offcanvas-backdrop fade show"
            onClick={handleSidebarClose}
            style={{ zIndex: 1040 }}
          ></div>

          <div
            className="offcanvas offcanvas-end show"
            style={{ visibility: 'visible', zIndex: 1045 }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close" onClick={handleSidebarClose}></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav gap-2 fw-bold">
                <li className="nav-item">
                  <NavLink to="#" className="nav-link" onClick={handleSidebarClose}>Crops</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#" className="nav-link" onClick={handleSidebarClose}>Storage</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#" className="nav-link" onClick={handleSidebarClose}>News</NavLink>
                </li>
                <li>
                  <Link to="/login" onClick={handleSidebarClose}>
                    <button className="btn bg-success text-white mt-2 w-100">Login</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
