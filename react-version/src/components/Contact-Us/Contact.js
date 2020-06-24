import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

//import custom css
import "./Contact.css";
import "../Home/Home.css";

//import images

import MapPic from "./img/map.png";
import AboutPic from "./img/about.svg";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <section className="page-banner gradient-back curve-bottom w-100">
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-12 col-md-6">
              <div className="inner-container inside">
                <h1 className="whitetxt mb-4">
                  24/7 Customer support Including weekends.
                </h1>
                <p className="big whitetxt mb-5">
                  We’re always there to help regardless the number of queries at
                  hand.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={AboutPic} className="img-fluid img-zoom mb-5" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="body">
          <div className="form-area">
            <div className="form">
              <p>
                Please note that all message will be replied within the next
                12hours
              </p>
              <form action="">
                <div className="input">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Comment"
                  className="textarea"
                ></textarea>
                <button className="button">publish</button>
              </form>
            </div>
            <div className="map ">
              <img src={MapPic} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
