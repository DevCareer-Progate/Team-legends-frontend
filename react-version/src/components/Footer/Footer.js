import React from "react";
import "../Home/Home.css";

//import images
import footerLogo from "../img/logofooter.svg";
import igPicture from "../img/ig-picture.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row m-0 p-0 w-100">
            <div className="col-12 col-md-6 col-xl-4 text-center text-md-left">
              <a href="#" className="d-inline-block mb-4">
                <img src={footerLogo} className="img-fluid" />
              </a>
              <p className="small gray2 my-3">
                Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
                rhoncus augue. Fusce vel metus pharetra, fermentum
              </p>
              <div className="row m-0 p-0 social-link mb-5 text-center text-md-left justify-content-left">
                <a href="#" className="d-inline-block mr-3 whitetxt">
                  <i className="link fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="d-inline-block mr-3 whitetxt">
                  <i className="link fab fa-facebook-square"></i>
                </a>
                <a href="#" className="d-inline-block mr-3 whitetxt">
                  <i className="link fab fa-twitter"></i>
                </a>
                <a href="#" className="d-inline-block mr-3 whitetxt">
                  <i className="link fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-2 text-center text-md-left">
              <h5 className="whitetxt mb-4">CoinBase Links</h5>
              <ul className="secondary-menu">
                <li>
                  <a href="#" className="gray2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="gray2">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="gray2">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="gray2">
                    Sell
                  </a>
                </li>
                <li>
                  <a href="#" className="gray2">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-xl-3 text-center text-md-left">
              <h5 className="whitetxt mb-4">Contact Us</h5>
              <ul className="secondary-menu">
                <li>
                  <p href="#" className="gray2">
                    (+123) 456789078
                  </p>
                </li>
                <li>
                  <p href="#" className="gray2">
                    Coinbase@yahoo.com
                  </p>
                </li>
                <li>
                  <p href="#" className="gray2">
                    Address goes here
                  </p>
                </li>
                <li className="mt-5">
                  <p href="#" className="gray2">
                    Download Our App
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-xl-3 text-center text-md-left">
              <h5 className="whitetxt mb-4">CoinBase Instagram</h5>
              <ul className="instagram-feed row p-0 m-0 w-100">
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
                <li className="col-6 col-sm-4 col-md-3">
                  <img src={igPicture} className="img-fluid" />
                </li>
              </ul>
            </div>
            <div className="col-12 my-4 my-xl-0 text-center text-md-left">
              <p className="gray3">
                © 2019 Designed by Cr8tiv_yemmy | 2020 Developed by Team_Legends
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
