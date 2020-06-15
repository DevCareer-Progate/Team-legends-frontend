import React from "react";
import "../Home/Home.css";
//import images

import Illustration from "../img/IMG-illustrastion.svg";
import Welcome from "../img/welcome.svg";
import Transfer from "../img/transfer.svg";
import Eth from "../img/Etherum.svg";
import Btc from "../img/bitcoin.svg";
import greatExp from "../img/great-experience.svg";
import giftCard from "../img/gift-cards.svg";

const Body = () => {
  return (
    <main>
      {/* section one*/}
      <section class="page-banner gradient-back curve-bottom w-100">
        <div class="container">
          <div class="row m-0 p-0">
            <div class="col-12 col-md-6">
              <div class="inner-container">
                <h1 class="whitetxt mb-4">
                  We provide easy solution to exchange your
                  <strong>Bitcoin/Giftcard for money</strong>
                </h1>
                <p class="big whitetxt mb-5">
                  CoinBase is a platform for trading your bitcoin and giftcard
                  at the best rate, why not give us a trial.
                </p>
                <a href="#" class="btn btn-white">
                  <span>GET STARTED</span>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <img
                /* src="img/IMG-illustrastion.svg" */
                src={Illustration}
                class="img-fluid img-zoom mb-5"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section two*/}
      <section class="whiteback">
        <div class="container">
          <div class="row m-0 p-0">
            <div class="col-12 col-md-6">
              <img src={Welcome} class="img-fluid img-zoom mb-5" />
            </div>
            <div class="col-12 col-md-6">
              <div class="sect-head">
                <h3 class="gradient-txt">Welcome to CoinBase</h3>
                <div class="divider"></div>
              </div>
              <p class="mb-5">
                We have the best rates . Simply start your exchange right now.
                Sign up for our Affiliate program and earn commission from each
                exchange. The earnings are credited in your account instantly
                and can be withdrawn right away. Also note some exchange
                directions are hidden for unregistered user. To ensure to have
                access to all our exchange directions and benefits kindly sign
                up and verify your identity.
              </p>
              <a href="#" class="btn button">
                DISCOVER
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section three*/}
      <section class="both-curve gradient-back">
        <div class="container">
          <div class="inner-container">
            <div class="w-100 mx-0 p-0 latest-box">
              <div class="col-12 table-responsive-xl px-0">
                <table class="table table-borderless table-hover">
                  <thead class="text-center">
                    <tr>
                      <th scope="col" colspan="2">
                        <h5 class="big gradient-txt text-left pl-5">
                          OUR RATES
                        </h5>
                      </th>
                      <th scope="col" colspan="2">
                        <h5 class="big gradient-txt">OUR RESERVES</h5>
                      </th>
                      <th scope="col" colspan="2">
                        <h5 class="big gradient-txt">LATEST EXCHANGES</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                      <td colspan="2"></td>
                      <td colspan="2">
                        <div class="w-75 mr-0 ml-auto latest-exchange">
                          <button>8 hours ago</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img src={Btc} class="img-fluid d-inline mr-3" />
                        <p class="small d-inline">BTC</p>
                      </th>
                      <td>
                        <p>
                          We Buy @ <span class="strong">₦350/$</span>
                        </p>
                        <p>
                          We Buy @ <span class="strong">₦370/$</span>
                        </p>
                      </td>
                      <td colspan="2">
                        <div class="rate">
                          <div>
                            <img
                              src={Transfer}
                              class="img-fluid d-inline mr-3"
                            />
                            <p class="small d-inline">Bank Transfer</p>
                            <p class="small float-right">NGN</p>
                          </div>
                          <p class="strong text-right">#3452030300303.24/$</p>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="w-75 mr-0 ml-auto latest-exchange">
                          <div class="text-right">
                            <p class="small">
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
                        <img src={Eth} class="img-fluid d-inline mr-3" />
                        <p class="small d-inline">ETH</p>
                      </th>
                      <td>
                        <p>
                          We Buy @ <span class="strong">₦345/$</span>
                        </p>
                        <p>
                          We Buy @ <span class="strong">₦370/$</span>
                        </p>
                      </td>
                      <td colspan="2">
                        <div class="rate">
                          <div class="">
                            <img src={Btc} class="img-fluid d-inline mr-3" />
                            <p class="small d-inline">BTC</p>
                            <p class="small float-right">399.98 BTC</p>
                          </div>
                          <div class="">
                            <img src={Eth} class="img-fluid d-inline mr-3" />
                            <p class="small d-inline">Ethereum</p>
                            <p class="small float-right">1000.00 ETH</p>
                          </div>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="w-75 mr-0 ml-auto latest-exchange">
                          <div class="text-right">
                            <p class="small">
                              1.16 BTC
                              <span>
                                <img src={Transfer} />
                              </span>
                              696152299929.23 NGN
                            </p>
                          </div>
                          <div class="text-right">
                            <p class="small">
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
      <section class="whiteback">
        <div class="container">
          <div class="row m-0 p-0 pb-5">
            <div class="col-12 col-md-6">
              <div class="sect-head">
                <h3 class="gradient-txt">
                  Great experience <br />
                  with CoinBase
                </h3>
                <div class="divider"></div>
              </div>
              <p class="mb-5">
                CoinBase is an online site and a p2admin platform that allows
                users to buy, sell and/ or exchange digital and fiat assets
                safely. Owned and managed by CoinBase Business Services
                established and Incoperated in Nigeria.
              </p>
              <a href="#" class="btn button">
                DISCOVER
              </a>
            </div>
            <div class="col-12 col-md-6">
              <img src={greatExp} class="img-fluid img-zoom mb-5" />
            </div>
          </div>
        </div>
      </section>
      {/* section five*/}
      <section class="curve-middle">
        <div class="container">
          <div class="inner-container">
            <div class="w-100 row m-0 mx-4 trade-box justify-content-center">
              <div class="col-12 sect-head text-center">
                <h3 class="gradient-txt">Trade from anywhere</h3>
                <div class="divider center"></div>
              </div>
              <div class="trade-item col-12 col-md-6 mt-5 mb-3 mr-md-3 md-text-center">
                <a
                  href="#"
                  class="row m-0 w-100 h-100 justify-content-center align-content-center text-center"
                >
                  <img src={Btc} class="img-fluid" />
                  <h6 class="col-12 mt-3 graytxt">Bitcoin</h6>
                </a>
              </div>
              <div class="trade-item col-12 col-md-6 mt-5 mb-3 ml-md-3 md-text-center">
                <a
                  href="#"
                  class="row m-0 w-100 h-100 justify-content-center align-content-center text-center"
                >
                  <img src={giftCard} class="img-fluid" />
                  <h6 class="col-12 mt-3 graytxt">Gift Cards</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section six*/}
      {/* section seven*/}
      {/* section eight*/}
      {/* section nine*/}
      {/* section ten*/}
    </main>
  );
};

export default Body;
