import React from "react";
//import common pages/components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

//import css files
import "./About.css";
//import images
import img1 from "./images/img1.svg";
import img2 from "./images/img2.svg";
import Quote from "./images/Quote.svg";
import Line from "./images/Line.svg";
import group2 from "./images/Group2.svg";
import group3 from "./images/Group3.svg";
import medal from "./images/medal.svg";
import customerReview from "./images/customer-review.svg";
import Tree from "./images/Tree.svg";

const About = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div class="container-fluid">
          <section class="sec-one container-fluid py-5">
            <div class="sec-one-div row text-white">
              <div class="col-sm-6 pt-5">
                <a class="mb-4 text-white text-decoration-none" href="#home">
                  HOME/
                </a>
                <a class="mb-4 text-white text-decoration-none" href="#abt">
                  ABOUT US
                </a>
                <h1 class="heading font-weight-bolder">Great service,</h1>
                <h1 class="heading font-weight-bolder">Professional support</h1>
                <p class="pt-2">
                  CoinBase is a platform for trading your bitcoin and giftcard
                  at the best rate, why not give us a trial.
                </p>
              </div>
              <div class="col-sm-6">
                <img class="img-responsive" src={img1} alt="service-img" />
              </div>
            </div>
          </section>

          <section class="container sec-two">
            <div>
              <img class="img-responsive pb-4 quote" src={Quote} />
              <img
                class="img-responsive d-block pb-3"
                src={Line}
                style={{ margin: "0 auto" }}
              />
              <p class="small text-center">Ramon Ridwan • CEO CoinBase</p>
            </div>
          </section>

          <section class="container sec-three text-center my-5 pt-3">
            <div class="sec-three-border center py-5">
              <div class="inner-div">
                <img
                  class="img-responsive text-center pb-5"
                  src={img2}
                  alt=""
                />
                <h2
                  class="font-weight-bolder pb-1"
                  style={{ fontWeight: "bolder" }}
                >
                  About CoinBase
                </h2>
                <img
                  class="img-responsive d-block pb-5"
                  src={Line}
                  style={{ margin: "0 auto" }}
                />
                <p class="w-75 center pb-5">
                  CoinBase is an online site and a p2admin platform that allows
                  users to buy, sell and/ or exchange digital and fiat assets
                  safely. Owned and managed by CoinBase Business Services
                  established and Incoporated in Nigeria.
                </p>
              </div>
              <div class="row icon">
                <div class="col-3">
                  <img class="img-responsive" src={group2} alt="" />
                </div>
                <div class="col-3">
                  <img class="img-responsive" src={medal} alt="" />
                </div>
                <div class="col-3">
                  <img class="img-responsive" src={customerReview} alt="" />
                </div>
                <div class="col-3">
                  <img class="img-responsive" src={group3} alt="" />
                </div>
              </div>
            </div>
          </section>

          <section class="container sec_four my-5">
            <h2 class="text-center font-weight-bolder pt-5">Our history</h2>
            <img
              class="img-responsive d-block pb-5 "
              style={{ margin: "0 auto" }}
              src={Line}
            />
            <div class="sec-four-date">
              <div class="row center mb-5 date">
                <div class="col-6 mt-5 left-date">
                  <div>
                    <h3>May, 2010</h3>
                    <p class="mt-4">
                      Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget
                      sem. Curabitur aliquam tellus eu nisl suscipit, at
                      vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper
                      pellentesque orci, nec vestibulum nibh.uspendisse
                    </p>
                  </div>
                  <div class="left-date-p2 pt-5">
                    <h3>May, 2019</h3>
                    <p class="mt-4">
                      Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget
                      sem. Curabitur aliquam tellus eu nisl suscipit, at
                      vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper
                      pellentesque orci, nec vestibulum nibh.uspendisse
                    </p>
                  </div>
                </div>
                <div class="col-6 d-flex right-col">
                  <img src={Tree} alt="" />
                  <div class="right-date">
                    <h3>May, 2017</h3>
                    <p class="mt-4">
                      Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget
                      sem. Curabitur aliquam tellus eu nisl suscipit, at
                      vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper
                      pellentesque orci, nec vestibulum nibh.uspendisse
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p class="small text-center font-weight-bold">TO BE CONTINUED...</p>
          </section>

          <section class="text-center mx-4 sec-five">
            <h2 class="font-weight-bolder">Meet the team</h2>
            <img
              class="img-responsive d-block lines pb-5"
              src={Line}
              style={{ margin: "0 auto" }}
            />
            <p class="my-0">
              Meet the team that makes the process of this system fast and
            </p>
            <p>painless as possible to provide you with good result</p>
            <div class="page-carousel-center slider">
              <div
                class="carousel-item"
                /* style="
                background-image: url('images/1.svg');
                background-size: cover;
                background-repeat: no-repeat;
              " */
              ></div>
              <div
                class="carousel-item"
                //                   style="
                //     background-image: url('images/2.svg');
                //     background-size: cover;
                //     background-repeat: no-repeat;
                //   "
              ></div>
              <div
                class="carousel-item"
                //                   style="
                //     background-image: url('images/3.svg');
                //     background-size: cover;
                //     background-repeat: no-repeat;
                //   "
              ></div>
              <div
                class="carousel-item"
                //                   style="
                //     background-image: url('images/4.svg');
                //     background-size: cover;
                //     background-repeat: no-repeat;
                //   "
              ></div>
              <div
                class="carousel-item"
                /* style="
                background-image: url('images/5.svg');
                background-size: cover;
                background-repeat: no-repeat;
              " */
              ></div>
            </div>
          </section>

          <section class="container text-center my-5 sec_five">
            <h2 class="font-weight-bolder">Subscribe our newsletter</h2>
            <img
              class="img-responsive d-block pb-5"
              style={{ margin: "0 auto" }}
              src={Line}
            />
            <p>Subscribe to our newsletter for daily/weekly</p>
            <p>update of our products and services.</p>
            <form class="my-4" action="submit">
              <div class="form-group w-100">
                <input class="py-3" type="text" placeholder="EMAIL" />
                <a class="btn px-3" href="#">
                  DISCOVER
                </a>
              </div>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
