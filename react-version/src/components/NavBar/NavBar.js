import React, { useRef, useState } from "react";
import "../Home/Home.css";
import { NavLink } from "react-router-dom";
import SignIn from "../SignIn/SignIn";

//import images
import Logo from "../img/Logo.svg";

const NavBar = () => {
  //state
  const [logModal, setLoginModal] = useState(false);
  //refs
  const refMenu = useRef();
  const priMenu = useRef();

  //toggleMenu is for responsive toggler
  const toggleMenu = () => {
    refMenu.current.classList.toggle("toggled");
    priMenu.current.classList.toggle("open");
  };

  //modal
  let modal;
  if (logModal) {
    modal = <SignIn />;
  }
  const handleModal = () => {
    setLoginModal(true);
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
                <li className="menu-item ">
                  <NavLink to="/" activeStyle={{ color: "#cfe5cf" }}>
                    Home
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/about" activeStyle={{ color: "#e7305b" }}>
                    About Us
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/blog" activeStyle={{ color: "#e7305b" }}>
                    Blog
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/contact" activeStyle={{ color: "#e7305b" }}>
                    Contact Us
                  </NavLink>
                </li>
                <li className="menu-item offset-md-0">
                  <div className="dropdown">
                    <NavLink
                      className="dropdown-toggle whitetxt"
                      to="/sell"
                      role="button"
                      id="dropdownMenu"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sell Bitcoin/ Giftcard
                    </NavLink>

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
                      ></div>
                      <a className="dropdown-item" href="#">
                        Sell Giftcard
                      </a>
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/login"
                    className="button btn"
                    style={{ transition: "all ease 0.3s", marginTop: "0px" }}
                    onClick={handleModal}
                    data-toggle="modal"
                    data-target="#signUp"
                    activeStyle={{ color: "#cfe5cf" }}
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {logModal && modal}
    </header>
  );
};

export default NavBar;
