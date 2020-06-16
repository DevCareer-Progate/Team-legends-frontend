import React from "react";
import "../Home/Home.css";
//import footer
import Footer from "../Footer/Footer";

//import images
import Illustration from "../img/IMG-illustrastion.svg";
import Welcome from "../img/welcome.svg";
import Transfer from "../img/transfer.svg";
import Eth from "../img/Etherum.svg";
import Btc from "../img/bitcoin.svg";
import greatExp from "../img/great-experience.svg";
import giftCard from "../img/gift-cards.svg";
import Star from "../img/star.svg";
import appleBadge from "../img/badge-apple-store.svg";
import googlePlayBadge from "../img/badge-google-play.svg";
import X1 from "../img/X-1.svg";
import X2 from "../img/X-2.svg";

const Body = () => {
  return (
    <div>
      <main>
        {/* section one*/}
        <section className="page-banner gradient-back curve-bottom w-100">
          <div className="container">
            <div className="row m-0 p-0">
              <div className="col-12 col-md-6">
                <div className="inner-container">
                  <h1 className="whitetxt mb-4">
                    We provide easy solution to exchange your
                    <strong> Bitcoin/Giftcard for money</strong>
                  </h1>
                  <p className="big whitetxt mb-5">
                    CoinBase is a platform for trading your bitcoin and giftcard
                    at the best rate, why not give us a trial.
                  </p>
                  <a href="#" className="btn btn-white">
                    <span>GET STARTED</span>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img
                  /* src="img/IMG-illustrastion.svg" */
                  src={Illustration}
                  className="img-fluid img-zoom mb-5"
                />
              </div>
            </div>
          </div>
        </section>
        {/* section two*/}
        <section className="whiteback">
          <div className="container">
            <div className="row m-0 p-0">
              <div className="col-12 col-md-6">
                <img src={Welcome} className="img-fluid img-zoom mb-5" />
              </div>
              <div className="col-12 col-md-6">
                <div className="sect-head">
                  <h3 className="gradient-txt">Welcome to CoinBase</h3>
                  <div className="divider"></div>
                </div>
                <p className="mb-5">
                  We have the best rates . Simply start your exchange right now.
                  Sign up for our Affiliate program and earn commission from
                  each exchange. The earnings are credited in your account
                  instantly and can be withdrawn right away. Also note some
                  exchange directions are hidden for unregistered user. To
                  ensure to have access to all our exchange directions and
                  benefits kindly sign up and verify your identity.
                </p>
                <a href="#" className="btn button">
                  DISCOVER
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* section three*/}
        <section className="both-curve gradient-back">
          <div className="container">
            <div className="inner-container">
              <div className="w-100 mx-0 p-0 latest-box">
                <div className="col-12 table-responsive-xl px-0">
                  <table className="table table-borderless table-hover">
                    <thead className="text-center">
                      <tr>
                        <th scope="col" colspan="2">
                          <h5 className="big gradient-txt text-left pl-5">
                            OUR RATES
                          </h5>
                        </th>
                        <th scope="col" colspan="2">
                          <h5 className="big gradient-txt">OUR RESERVES</h5>
                        </th>
                        <th scope="col" colspan="2">
                          <h5 className="big gradient-txt">LATEST EXCHANGES</h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td colspan="2"></td>
                        <td colspan="2">
                          <div className="w-75 mr-0 ml-auto latest-exchange">
                            <button>8 hours ago</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src={Btc} className="img-fluid d-inline mr-3" />
                          <p className="small d-inline">BTC</p>
                        </th>
                        <td>
                          <p>
                            We Buy @ <span className="strong">₦350/$</span>
                          </p>
                          <p>
                            We Buy @ <span className="strong">₦370/$</span>
                          </p>
                        </td>
                        <td colspan="2">
                          <div className="rate">
                            <div>
                              <img
                                src={Transfer}
                                className="img-fluid d-inline mr-3"
                              />
                              <p className="small d-inline">Bank Transfer</p>
                              <p className="small float-right">NGN</p>
                            </div>
                            <p className="strong text-right">
                              #3452030300303.24/$
                            </p>
                          </div>
                        </td>
                        <td colspan="2">
                          <div className="w-75 mr-0 ml-auto latest-exchange">
                            <div className="text-right">
                              <p className="small">
                                Bitcoin BTC
                                <span>
                                  <img src={Transfer} />
                                </span>{" "}
                                Bank Transfer NGN
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src={Eth} className="img-fluid d-inline mr-3" />
                          <p className="small d-inline">ETH</p>
                        </th>
                        <td>
                          <p>
                            We Buy @ <span className="strong">₦345/$</span>
                          </p>
                          <p>
                            We Buy @ <span className="strong">₦370/$</span>
                          </p>
                        </td>
                        <td colspan="2">
                          <div className="rate">
                            <div className="">
                              <img
                                src={Btc}
                                className="img-fluid d-inline mr-3"
                              />
                              <p className="small d-inline">BTC</p>
                              <p className="small float-right">399.98 BTC</p>
                            </div>
                            <div className="">
                              <img
                                src={Eth}
                                className="img-fluid d-inline mr-3"
                              />
                              <p className="small d-inline">Ethereum</p>
                              <p className="small float-right">1000.00 ETH</p>
                            </div>
                          </div>
                        </td>
                        <td colspan="2">
                          <div className="w-75 mr-0 ml-auto latest-exchange">
                            <div className="text-right">
                              <p className="small">
                                1.16 BTC
                                <span>
                                  <img src={Transfer} />
                                </span>
                                696152299929.23 NGN
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="small">
                                Amazon Card
                                <span>
                                  <img src={Transfer} />
                                </span>{" "}
                                Bank Transfer
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section four*/}
        <section className="whiteback">
          <div className="container">
            <div className="row m-0 p-0 pb-5">
              <div className="col-12 col-md-6">
                <div className="sect-head">
                  <h3 className="gradient-txt">
                    Great experience <br />
                    with CoinBase
                  </h3>
                  <div className="divider"></div>
                </div>
                <p className="mb-5">
                  CoinBase is an online site and a p2admin platform that allows
                  users to buy, sell and/ or exchange digital and fiat assets
                  safely. Owned and managed by CoinBase Business Services
                  established and Incoperated in Nigeria.
                </p>
                <a href="#" className="btn button">
                  DISCOVER
                </a>
              </div>
              <div className="col-12 col-md-6">
                <img src={greatExp} className="img-fluid img-zoom mb-5" />
              </div>
            </div>
          </div>
        </section>
        {/* section five*/}
        <section className="curve-middle">
          <div className="container">
            <div className="inner-container">
              <div className="w-100 row m-0 mx-4 trade-box justify-content-center">
                <div className="col-12 sect-head text-center">
                  <h3 className="gradient-txt">Trade from anywhere</h3>
                  <div className="divider center"></div>
                </div>
                <div className="trade-item col-12 col-md-6 mt-5 mb-3 mr-md-3 md-text-center">
                  <a
                    href="#"
                    className="row m-0 w-100 h-100 justify-content-center align-content-center text-center"
                  >
                    <img src={Btc} className="img-fluid" />
                    <h6 className="col-12 mt-3 graytxt">Bitcoin</h6>
                  </a>
                </div>
                <div className="trade-item col-12 col-md-6 mt-5 mb-3 ml-md-3 md-text-center">
                  <a
                    href="#"
                    className="row m-0 w-100 h-100 justify-content-center align-content-center text-center"
                  >
                    <img src={giftCard} className="img-fluid" />
                    <h6 className="col-12 mt-3 graytxt">Gift Cards</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section six*/}
        <section className="whiteback">
          <div className="container">
            <div className="w-100 row m-0 p-0 px-4">
              <div className="col-12 sect-head text-center">
                <h3 className="gradient-txt">Our blog</h3>
                <div className="divider center"></div>
                <p className="">
                  Get to know the latest stuff via our blog post.
                </p>
              </div>
              <div className="col-12">
                <div className="page-post-center slider">
                  <div className="post-item">
                    <div className="h-100 w-100 post-item-wrap">
                      <p className="smaller mb-3">01 FEB, 2019 | TECHNOLOGY</p>
                      <h4 className="gradient-txt mb-3">
                        HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
                      </h4>
                      <p className="excerpt mb-3">
                        Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                        minimum voluptaria in. Ad mei modus quodsi complectitur,
                        postea...
                      </p>
                      <a href="#" className="button btn">
                        READ MORE
                      </a>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="h-100 w-100 post-item-wrap">
                      <p className="smaller mb-3">19 JUNE, 2019 | BUSINESS</p>
                      <h4 className="gradient-txt mb-3">
                        ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
                      </h4>
                      <p className="excerpt mb-3">
                        Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                        minimum voluptaria in. Ad mei modus quodsi complectitur,
                        postea...
                      </p>
                      <a href="#" className="button btn">
                        READ MORE
                      </a>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="h-100 w-100 post-item-wrap">
                      <p className="smaller mb-3">01 DEC, 2019 | LIFESTYLE</p>
                      <h4 className="gradient-txt mb-3">
                        EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
                      </h4>
                      <p className="excerpt mb-3">
                        Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                        minimum voluptaria in. Ad mei modus quodsi complectitur,
                        postea...
                      </p>
                      <a href="#" className="button btn">
                        READ MORE
                      </a>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="h-100 w-100 post-item-wrap">
                      <p className="smaller mb-3">19 JUNE, 2019 | BUSINESS</p>
                      <h4 className="gradient-txt mb-3">
                        ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
                      </h4>
                      <p className="excerpt mb-3">
                        Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                        minimum voluptaria in. Ad mei modus quodsi complectitur,
                        postea...
                      </p>
                      <a href="#" className="button btn">
                        READ MORE
                      </a>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="h-100 w-100 post-item-wrap">
                      <p className="smaller mb-3">01 FEB, 2019 | TECHNOLOGY</p>
                      <h4 className="gradient-txt mb-3">
                        HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
                      </h4>
                      <p className="excerpt mb-3">
                        Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                        minimum voluptaria in. Ad mei modus quodsi complectitur,
                        postea...
                      </p>
                      <a href="#" className="button btn">
                        READ MORE
                      </a>
                    </div>
                  </div>
                  <div className="post-item">
                    <div className="h-100 w-100 post-item-wrap">
                      <p className="smaller mb-3">01 DEC, 2019 | LIFESTYLE</p>
                      <h4 className="gradient-txt mb-3">
                        EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
                      </h4>
                      <p className="excerpt mb-3">
                        Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                        minimum voluptaria in. Ad mei modus quodsi complectitur,
                        postea...
                      </p>
                      <a href="#" className="button btn">
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section seven*/}
        <section className="bubble-back gradient-back both-curve">
          <div className="container">
            <div className="w-100 row m-0 p-0 px-4">
              <div className="col-12 sect-head text-center">
                <h3 className="whitetxt">
                  10,000 Satisfied clients <br />
                  around the world
                </h3>
                <div className="divider center"></div>
                <p className="center-small whitetxt">
                  Yeah! we’re proud with numbers. We’ve helped thousands of
                  clients all around the world with our bespoke service. Hover
                  ontop of them pic to view their testimonials.
                </p>
              </div>
              <div className="col-12">
                <div className="page-bubble-center">
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble" style={{ zIndex: "50" }}>
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                        <img src={Star} className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bubble-item">
                    <div className="client-img"></div>
                    <div className="speech-bubble">
                      <p className="smaller mb-2">Femi from Nigeria</p>
                      <div className="reviews">
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                        <img src="img/star.svg" className="img-fluid" />
                      </div>
                      <div className="reviewtxt">
                        <p className="testimon graytxt mb-1">
                          Wonderful service
                        </p>
                        <p className="">
                          Good deal and very wonderful service thank you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section eight*/}
        <section className="whiteback">
          <div className="container">
            <div className="w-100 row m-0 p-0">
              <div className="col-12 sect-head text-center">
                <h3 className="gradient-txt">Download our app</h3>
                <div className="divider center"></div>
                <p className="graytxt">
                  Discover exclusive deals and discounts with our mobile
                  experience.
                </p>
              </div>
              <div className="col-12 text-center">
                <a href="#" className="d-inline-block stores">
                  <img src={appleBadge} className="img-fluid" />
                </a>
                <a href="#" className="d-inline-block stores">
                  <img src={googlePlayBadge} className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* section nine*/}
        <section className="mock-up curve-bottom">
          <div className="container">
            <div className="row m-0 p-0 w-100">
              <div className="col-12 col-md-6 mt-md-5 pt-md-3 text-center text-md-right">
                <img src={X1} className="img-fluid mt-md-5" />
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-5 pt-md-3 text-center text-md-left">
                <img src={X2} className="img-fluid mt-md-5" />
              </div>
            </div>
          </div>
        </section>
        {/* section ten*/}
        <section className="whiteback plustop">
          <div className="container">
            <div className="w-100 row m-0 p-0">
              <div className="col-12 sect-head text-center">
                <h3 className="gradient-txt">Subscribe our newsletter</h3>
                <div className="divider center"></div>
                <p className="graytxt">
                  Subscribe to our newsletter for daily/weekly update of our
                  products and services.
                </p>
              </div>
              <div className="col-12 col-md-6 mx-auto my-4">
                {/* div for form */}
                <div>
                  <div className="form-row align-items-center justify-content-center">
                    <div className="col-12 col-md-7 mr-md-4 input-gradient-border">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="inlineFormInput"
                        placeholder="Email "
                      />
                    </div>
                    <div className="col-6 col-md-4 mt-3 mt-md-0 ml-3 m-md-0 p-0 text-right">
                      <button type="submit" className="btn w-100 whitetxt">
                        DISCOVER
                      </button>
                    </div>
                  </div>
                </div>
                {/* div for form ends */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Body;
