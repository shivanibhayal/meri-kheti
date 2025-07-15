import React, { useState } from 'react'
import img from "../assets/images/khetilogo.png";
import styles from "../assets/css/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5"; 
import { Link } from "react-router-dom";
import '../App.css';
const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(true);
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.fixedNavbar}`}>
      <div className="container-fluid">
        <div className='row'>  
        <div className="col-3">
          <Link className={`navbar-brand {styles.imgbrand}`} to="/khetilogo">
            <img src={img} alt="" className={`img-fluid ${styles.navimg}`} />
          </Link>
        </div>
        <button className="navbar-toggler border-0  shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-9 ">
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            {openSearch ?
              <ul className="navbar-nav mr-5 mb-2 gap-2 mb-lg-0 fw-bold"

              >
                <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
                  <a className="nav-link dropdown-toggle" href="#" id='navbarDropdown'>
                    Crops
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Food Crops</a></li>
                    <li><a className="dropdown-item" href="#">Cash Crops</a></li>
                    <li><a className="dropdown-item" href="#">Plantation Crops</a></li>
                    <li><a className="dropdown-item" href="#">Horticulture Crops</a></li>
                    <li><a className="dropdown-item" href="#">Spices Crops</a></li>
                    <li><a className="dropdown-item" href="#">Animal Fodder</a></li>
                  </ul>
                </li>
                <li className={`nav-item ${styles.liHover}`}>
                  <a className="nav-link" href="#">Storage</a>
                </li>
                <li className={`nav-item ${styles.liHover}`}>
                  <a className="nav-link" href="#">Pestisides</a>
                </li>
                <li className={`nav-item ${styles.liHover}`}>
                  <a className="nav-link" href="#">Live-stock</a>
                </li>
                <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                  >
                    Machinery
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Tractors</a></li>
                    <li><a className="dropdown-item" href="#">Tractor Blog</a></li>
                    <li><a className="dropdown-item" href="#">Implements</a></li>
                    <li><a className="dropdown-item" href="#">Implement Blog</a></li>
                    <li><a className="dropdown-item" href="#">tyre</a></li>
                  </ul>
                </li>

                <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" >
                    News
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Government Schemes</a></li>
                    <li><a className="dropdown-item" href="#">Farmer News</a></li>

                  </ul>
                </li>
                <li className={`nav-item ${styles.liHover}`}>
                  <a className="nav-link" href="#">Editorial</a>
                </li>
                <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button">
                    Others
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Magazines</a></li>
                    <li><a className="dropdown-item" href="#">Progressive Farmer</a></li>
                    <li><a className="dropdown-item" href="#">Interviews</a></li>
                    <li><a className="dropdown-item" href="#">Soil Health</a></li>
                    <li><a className="dropdown-item" href="#">Our Expert</a></li>
                    <li><a className="dropdown-item" href="#">Web Stories</a></li>
                    <li><a className="dropdown-item" href="#">video</a></li>
                    <li><a className="dropdown-item" href="#">Customer Care</a></li>
                  </ul>
                </li>
                <li className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button">
                    English
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">हिंदी</a></li>
                    <li><a className="dropdown-item" href="#">English</a></li>
                  </ul>
                </li>
                <li className={`nav-item ${styles.liHover}`}>
                  <CiSearch className='fs-3 mt-2 fw-bold' onClick={() => setOpenSearch(!openSearch)} />
                </li>
                <li>
                  <Link to="/login">
                    <button className={`btn bg-success ms-2 text-none navloginbtn mt-1 px-3 ${styles.navLoginBtn}`}>Login</button>
                  </Link>
                </li>
              </ul> :
              <form action="">
                <div className='d-flex justify-content-center gap-2 position-relative ' style={{ maxWidth: "800px", marginLeft: "400px" }}>
                  <input type="text" placeholder='search merikheti' className={`ps-5 rounded ${styles.input}`} />
                  <CiSearch className='fs-4 fw-bold position-absolute top-50 start-0 translate-middle-y ms-3  text-muted' />
                  <IoClose className='fs-4 text-success mt-2 ms-3' onClick={() => setOpenSearch(true)} />

                </div>
              </form>
            }

          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
