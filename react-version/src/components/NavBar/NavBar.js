import React, { useRef } from "react";
import "../Home/Home.css";
//import images

import Logo from "../img/Logo.svg";

const NavBar = () => {
  //refs
  const refMenu = useRef();
  const priMenu = useRef();
  //state

  const toggleMenu = () => {
    refMenu.current.classList.toggle("toggled");
    priMenu.current.classList.toggle("open");
  };
  return (
    <header>
      <nav className="navbar m-0 p-0">
        <div className="primary-header w-100" ref={refMenu}>
          <div className="container">
            <div className="w-100 row m-0 p-0 justify-content-between align-items-center">
              <a className="navbar-brand " href="#">
                <img
                  className="inlineLogo"
                  /* src="img/Logo.svg" */ src={Logo}
                  alt="Logo"
                />
              </a>
              <div className="toggle-menu" onClick={toggleMenu}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>
              <ul
                className="primary-menu row justify-content-between align-items-center h-100 p-0 m-0"
                ref={priMenu}
              >
                <li className="menu-item active">
                  <a href="#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="#">About Us</a>
                </li>
                <li className="menu-item">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item">
                  <a href="#">Contact Us</a>
                </li>
                <li className="menu-item offset-md-0">
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle whitetxt"
                      href="#"
                      role="button"
                      id="dropdownMenu"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sell Bitcoin/ Giftcard
                    </a>

                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenu"
                    >
                      <a
                        className="dropdown-item"
                        href="#sellBitcoin"
                        data-toggle="modal"
                      >
                        Sell Bitcoin
                      </a>
                      {/* <!-- Modal --> */}
                      <div
                        className="modal fade"
                        id="sellBitcoin"
                        role="dialog"
                      >
                        <div className="modal-dialog">
                          {/* <!-- Modal content--> */}
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                &times;
                              </button>
                              <h4 style={{ color: "red" }}>
                                <span className="glyphicon glyphicon-lock"></span>{" "}
                                Login
                              </h4>
                            </div>
                            <div className="modal-body">
                              <form role="form">
                                <div className="form-group">
                                  <label for="usrname">
                                    <span className="glyphicon glyphicon-user"></span>{" "}
                                    Username
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="usrname"
                                    placeholder="Enter email"
                                  />
                                </div>
                                <div className="form-group">
                                  <label for="psw">
                                    <span className="glyphicon glyphicon-eye-open"></span>{" "}
                                    Password
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="psw"
                                    placeholder="Enter password"
                                  />
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" value="" checked />
                                    Remember me
                                  </label>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-default btn-success btn-block"
                                >
                                  <span className="glyphicon glyphicon-off"></span>{" "}
                                  Login
                                </button>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="submit"
                                className="btn btn-default btn-default pull-left"
                                data-dismiss="modal"
                              >
                                <span className="glyphicon glyphicon-remove"></span>{" "}
                                Cancel
                              </button>
                              <p>
                                Not a member? <a href="#">Sign Up</a>
                              </p>
                              <p>
                                Forgot <a href="#">Password?</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="dropdown-item" href="#">
                        Sell Giftcard
                      </a>
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <a href="#" className="button btn">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
