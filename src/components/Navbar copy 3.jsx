import React, { useState } from "react";
import img from "../assets/images/khetilogo.png";
import styles from "../assets/css/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  // Add this state above inside your component
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${styles.fixedNavbar}`}
      >
        <div className="container-fluid">
          <div className="row w-100 justify-content-between">
            <div className="col-3">
              <Link className="navbar-brand" to="/khetilogo">
                <img
                  src={img}
                  alt="logo"
                  className={`img-fluid ${styles.navimg}`}
                />
              </Link>
            </div>
            <div className="col-9 d-flex justify-content-end">
              <button
                className="navbar-toggler border-0 shadow-none"
                type="button"
                onClick={() => setShowSidebar(true)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-none d-lg-flex"
                id="navbarSupportedContent"
              >
                {openSearch ? (
                  <ul className="navbar-nav mr-5 mb-2 gap-2 mb-lg-0 fw-bold">
                    <li
                      className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}
                    >
                      <a className="nav-link dropdown-toggle" href="#">
                        Crops
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            className={`dropdown-item ${styles.changeBg}`}
                            to="#"
                          >
                            Food Crops
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={`dropdown-item ${styles.changeBg}`}
                            to="#"
                          >
                            Cash Crops
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={`dropdown-item ${styles.changeBg}`}
                            to="#"
                          >
                            Plantation Crops
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={`dropdown-item ${styles.changeBg}`}
                            to="#"
                          >
                            Horticulture Crops
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={`dropdown-item ${styles.changeBg}`}
                            to="#"
                          >
                            Spices Crops
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={`dropdown-item ${styles.changeBg}`}
                            to="#"
                          >
                            Animal Fodder
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className={`nav-item ${styles.liHover}`}>
                      <a className="nav-link" href="#">
                        Storage
                      </a>
                    </li>
                    <li className={`nav-item ${styles.liHover}`}>
                      <a className="nav-link" href="#">
                        Pestisides
                      </a>
                    </li>
                    <li className={`nav-item ${styles.liHover}`}>
                      <a className="nav-link" href="#">
                        Live-stock
                      </a>
                    </li>
                    <li
                      className={`nav-item dropdown ${styles.hoverDropdown} ${styles.liHover}`}
                    >
                      <a className="nav-link dropdown-toggle" href="#">
                        Machinery
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Tractors
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Tractor Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Implements
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Implement Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            tyre
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className={`nav-item ${styles.liHover}`}>
                      <a className="nav-link" href="#">
                        Editorial
                      </a>
                    </li>
                    <li className={`nav-item ${styles.liHover}`}>
                      <CiSearch
                        className="fs-3 mt-2 fw-bold"
                        onClick={() => setOpenSearch(false)}
                      />
                    </li>
                    <li>
                      <Link to="/login">
                        <button
                          className={`btn bg-success ms-2 navloginbtn mt-1 px-3 ${styles.navLoginBtn}`}
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <form
                    className="d-flex align-items-center gap-2 position-relative"
                    style={{ maxWidth: "800px", marginLeft: "auto" }}
                  >
                    <input
                      type="text"
                      placeholder="search merikheti"
                      className={`ps-5 rounded ${styles.input}`}
                    />
                    <CiSearch className="fs-4 fw-bold position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                    <IoClose
                      className="fs-4 text-success mt-2 ms-3"
                      onClick={() => setOpenSearch(true)}
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Manual Offcanvas */}
      {showSidebar && (
        <>
          <div
            className="position-fixed top-0 end-0 bg-white shadow"
            style={{ width: "250px", height: "100vh", zIndex: 1050 }}
          >
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <h5 className="mb-0">Menu</h5>
              <button
                className="btn-close"
                onClick={() => setShowSidebar(false)}
              ></button>
            </div>
            <div className="p-3">
              <ul className="navbar-nav gap-2 fw-bold">
                <li>
                  <NavLink
                    className="nav-link"
                    to="#"
                    onClick={() => setShowSidebar(false)}
                  >
                    <div className="p-3">
                      <ul className="navbar-nav gap-2 fw-bold">
                        {/* Toggle Dropdown */}
                        <li>
                          <button
                            className="btn btn-light w-100 text-start"
                            onClick={() => setShowDropdown(!showDropdown)} // just toggle dropdown
                          >
                            Crops ▾
                          </button>
                          {showDropdown && (
                            <ul className="list-unstyled ps-3 mt-2">
                              <li>
                                <NavLink
                                  className="nav-link"
                                  to="#"
                                  onClick={() => setShowSidebar(false)}
                                >
                                  Food Crops
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  to="#"
                                  onClick={() => setShowSidebar(false)}
                                >
                                  Cash Crops
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="nav-link"
                                  to="#"
                                  onClick={() => setShowSidebar(false)}
                                >
                                  Plantation
                                </NavLink>
                              </li>
                            </ul>
                          )}
                        </li>

                        {/* Other links */}
                        <li>
                          <NavLink
                            className="nav-link"
                            to="#"
                            onClick={() => setShowSidebar(false)}
                          >
                            Storage
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link"
                            to="#"
                            onClick={() => setShowSidebar(false)}
                          >
                            News
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            className="btn btn-success mt-2 w-100"
                            onClick={() => setShowSidebar(false)}
                          >
                            Login
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="#"
                    onClick={() => setShowSidebar(false)}
                  >
                    Crops
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="#"
                    onClick={() => setShowSidebar(false)}
                  >
                    Storage
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="#"
                    onClick={() => setShowSidebar(false)}
                  >
                    News
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-success mt-2 w-100"
                    onClick={() => setShowSidebar(false)}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
            style={{ zIndex: 1040 }}
            onClick={() => setShowSidebar(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default Navbar;
