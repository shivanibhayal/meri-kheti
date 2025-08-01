import React, { useState } from 'react';
import img from "../assets/images/khetilogo.png";
import styles from "../assets/css/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeSearch = () => {
    setOpenSearch(false);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.fixedNavbar}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link className={`navbar-brand ${styles.imgbrand}`} to="/khetilogo">
          <img src={img} alt="logo" className={`img-fluid ${styles.navimg}`} />
        </Link>

        {/* Search Icon + Toggler on small screens */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <CiSearch
            className="fs-4 text-dark"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenSearch(true)}
          />
          <button
            className="border-0 bg-transparent"
            type="button"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <IoClose className="fs-3" />
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 gap-2 mb-lg-0 fw-bold">

 {openSearch ? (
        <form className="position-absolute w-100 h-100 shadow p-4 top-0 start-0 z-0">
          <div className='d-flex justify-content-center position-relative align-items-center gap-3' style={{ maxWidth: "500px", margin: "auto" }}>
            <input type="text" placeholder='Search merikheti' className={`form-control ps-5 ${styles.input}`} />
            <CiSearch className='fs-2 fw-bold position-absolute start-0  ps-2 text-muted' />
            <IoClose className='fs-4 text-success' style={{ cursor: "pointer" }} onClick={closeSearch} />
          </div>
        </form>
      ):(
<>
            <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
              <a className="nav-link dropdown-toggle" href="#">Crops</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Food Crops</a></li>
                <li><a className="dropdown-item" href="#">Cash Crops</a></li>
                <li><a className="dropdown-item" href="#">Plantation Crops</a></li>
                <li><a className="dropdown-item" href="#">Horticulture Crops</a></li>
                <li><a className="dropdown-item" href="#">Spices Crops</a></li>
                <li><a className="dropdown-item" href="#">Animal Fodder</a></li>
              </ul>
            </li>

            <li className={`nav-item ${styles.liHover}`}><a className="nav-link" href="#">Storage</a></li>
            <li className={`nav-item ${styles.liHover}`}><a className="nav-link" href="#">Pestisides</a></li>
            <li className={`nav-item ${styles.liHover}`}><a className="nav-link" href="#">Live-stock</a></li>

            <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
              <a className="nav-link dropdown-toggle" href="#">Machinery</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Tractors</a></li>
                <li><a className="dropdown-item" href="#">Tractor Blog</a></li>
                <li><a className="dropdown-item" href="#">Implements</a></li>
                <li><a className="dropdown-item" href="#">Implement Blog</a></li>
                <li><a className="dropdown-item" href="#">Tyre</a></li>
              </ul>
            </li>

            <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
              <a className="nav-link dropdown-toggle" href="#">News</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Government Schemes</a></li>
                <li><a className="dropdown-item" href="#">Farmer News</a></li>
              </ul>
            </li>

            <li className={`nav-item ${styles.liHover}`}><a className="nav-link" href="#">Editorial</a></li>

            <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
              <a className="nav-link dropdown-toggle" href="#">Others</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Magazines</a></li>
                <li><a className="dropdown-item" href="#">Progressive Farmer</a></li>
                <li><a className="dropdown-item" href="#">Interviews</a></li>
                <li><a className="dropdown-item" href="#">Soil Health</a></li>
                <li><a className="dropdown-item" href="#">Our Expert</a></li>
                <li><a className="dropdown-item" href="#">Web Stories</a></li>
                <li><a className="dropdown-item" href="#">Video</a></li>
                <li><a className="dropdown-item" href="#">Customer Care</a></li>
              </ul>
            </li>

            <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
              <a className="nav-link dropdown-toggle" href="#">English</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">हिंदी</a></li>
                <li><a className="dropdown-item" href="#">English</a></li>
              </ul>
            </li>

            {/* Desktop Search */}
            <li className={`nav-item ${styles.liHover} d-none d-lg-block`}>
              <CiSearch className='fs-3 mt-2 fw-bold' onClick={() => setOpenSearch(true)} />
            </li>

            <li>
              <Link to="/login">
                <button className={`btn bg-success ms-2 text-none navloginbtn mt-1 px-3 ${styles.navLoginBtn}`}>Login</button>
              </Link>
            </li>
             </>
)}
          </ul>
        </div>
      </div>

      {/* Search Form (overlay-like) */}
     
    </nav>
  );
};

export default Navbar;
