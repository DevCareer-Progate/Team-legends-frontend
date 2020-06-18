import React from "react";

//import css
import "./Blog1.css";
import "./Blog1-Media-queries.css";

//import common pages
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Blog1 = () => {
  return (
    <div>
      <NavBar />
      <section className="top-background ">
        <div className="wave">
          <div className=" container top">
            <h2>
              ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER <br /> Transactions
            </h2>
            <p>
              19 JUNE, 2020 <span id="line"></span> BUSINESS
            </p>
          </div>
        </div>
      </section>
      {/* <!-- TOP SECTION ENDS --> */}

      {/* <!-- BLOG SECTION --> */}
      <section className=" container blog">
        <div className="blog-content">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="blog-one">
              {/* <!-- ARTICLE BEGINS --> */}
              <article>
                Over the past eight years, Coinbase has built one of the most
                trusted names in crypto by providing clients with
                industry-leading trading and custody platforms. Today, we’re at
                an inflection point in the industry, with some of the world’s
                top hedge fund and macro investors entering the space and
                searching for the right infrastructure through which to engage
                with crypto. This is why we’re excited to announce that we’ve
                agreed to acquire Tagomi, the leading crypto prime brokerage
                platform. The acquisition will bolster our offerings for
                advanced traders and the most sophisticated crypto investors.
              </article>

              <h6>
                <b>Coinbase continues to explore support for new assets</b>
              </h6>

              <article>
                We’ve seen a swell in demand from institutional investors over
                the past year, driving tremendous growth in our Coinbase Custody
                offering and increased volumes on our trading platforms. This
                has led us to build advanced features such as margin trading for
                institutional investors and new tools to help investors
                segregate their trading strategies. Most recently, we expanded
                Coverage for larger clients by adding Brett Tejpaul as Head of
                Institutional Coverage to our leadership team.The addition of
                Tagomi will round out our product suite for the fast-growing
                institutional trading market. It will allow us to offer custody,
                professional trading features, and prime brokerage services on
                one platform , giving sophisticated investors the seamless,
                powerful trading experience they have come to expect in equities
                and FX markets.
              </article>

              <article>
                Since launching 18 months ago, Tagomi has become the platform of
                choice for many advanced traders, hedge funds, and family
                offices, including well-known names such as Paradigm, Pantera,
                Bitwise, Multicoin, and many more. The company has also built
                out an executive team with a rare blend of traditional financial
                services and crypto experience, led by co-founders Greg Tusar,
                Jennifer Campbell, and Marc Bhargava. The Tagomi bench brings
                experience from leading firms like Goldman Sachs, Citadel, KCG,
                Tower Research, and USV.
              </article>

              <article>
                In short, I think over the next decade we’ll see a blockchain,
                that is both more scalable and includes privacy features, reach
                about 1B users by the end of the decade (up from about 50M at
                the start of the decade). Adoption will happen both in emerging
                markets, where the financial systems are most broken, and from a
                crop of new crypto first startups producing products people
                want. By the end of the decade, most tech startups will have a
                crypto component, just like most tech startups use the internet
                and machine learning today.
              </article>

              {/* <!-- ARTICLE BEGINS --> */}

              {/* <!-- SECOND BLOG  BEGINS--> */}
              <div className="row second-blog">
                <div className="col-md-6  col-sm-12 blog-two">
                  <article>
                    In the 2020s, I believe we’ll see layer two solutions, or
                    new blockchains come out which increase transaction
                    throughput by several orders of magnitude. applications
                    start to develop more rapidly{" "}
                    <b> (see “the rise of the crypto startup” below). </b>
                    By shifting cryptocurrency from being primarily about
                    trading and speculation to being about real world utility,
                    the 2020s will see a huge increase in the number of people
                    holding and using cryptocurrency,
                  </article>

                  <article>
                    In addition to scalability, I think we’ll also see privacy
                    integrated into one of the dominant chains in the 2020s.
                    Just like how the internet launched with HTTP, and only
                    later introduced HTTPS as a default on many websites.By
                    shifting cryptocurrency from being primarily about trading
                    and speculation to being about real world utility, the 2020s
                    will see a huge increase in the number of people holding and
                    using cryptocurrency,
                  </article>
                </div>
                <div className="col-md-6 col-sm-12 blog-img">
                  <img
                    src="https://res.cloudinary.com/ufonumo/image/upload/v1591907934/iimage_eo92hr.png"
                    alt=""
                  />
                </div>
              </div>
              {/*  <!-- SECOND BLOG  BEGINS  HERE--> */}
              <article>
                As a bonus final item, my friends Olaf Carlson-Wee and Balaji
                Srinivasan estimate that at a price of $200,000 per Bitcoin,
                more than half the world’s billionaires will be from
                cryptocurrency. Whether you think this is a good thing or a bad
                thing, it means there will be more pro-technology people with
                access to large amounts of capital in the 2020s.
              </article>

              <article>
                We’ll see how many of these predictions turn out to be true. By
                shifting cryptocurrency from being primarily about trading and
                speculation to being about real world utility, the 2020s will
                see a huge increase in the number of people holding and using
                cryptocurrency. By shifting cryptocurrency from being primarily
                about trading and speculation to being about real world utility,
                the 2020s will see a huge increase in the number of people
                holding and using cryptocurrency, and start to really move the
                needle on global economic freedom.
              </article>

              {/*  <!-- SECTION WITH SOCIAL MEDIA ICONS BEGINS--> */}
              <div className="row share-tag">
                <div className="tags">
                  <p>Tags: Business, Capital, Finance</p>
                </div>
                <div className="share">
                  <p>
                    Share with
                    <a href="#">
                      <img
                        className="share-image down"
                        src="https://res.cloudinary.com/ufonumo/image/upload/v1591907903/1_iatzn7.png"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        className="share-image one"
                        src="https://res.cloudinary.com/ufonumo/image/upload/v1591907901/2_jwoiju.png"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <img
                        className="share-image down"
                        src="https://res.cloudinary.com/ufonumo/image/upload/v1591907902/3_mump3y.png"
                        alt=""
                      />
                    </a>
                  </p>
                </div>
              </div>

              <div className="row col-sm-12 iTunes">
                <div className="iTunes-sell ">
                  <h5>
                    How to sell your iTunes <br /> giftcard with us
                  </h5>
                </div>
                <div className="Exchange">
                  <h5>
                    Exchange 5 products and get <br /> one free product
                  </h5>
                </div>
              </div>

              <div className="row col-sm-12 iTunes">
                <div className="iTunes-sell ">
                  <h5>The rise of the crypto Startups</h5>
                  <input
                    type="submit"
                    name=""
                    className="btn-blog"
                    value="Prev Post"
                  />
                </div>
                <div className="Exchange">
                  <h5>
                    Bootstrapping the Coinbase <br /> Monorepo in 2020
                  </h5>
                  <input
                    type="submit"
                    name=""
                    className="btn-blog "
                    value="Next Post"
                  />
                </div>
              </div>
              {/* <!-- SECTION WITH SOCIAL MEDIA ICONS ENDS --> */}

              {/*  <!-- CONTACT FORM  BEGINS--> */}

              <form className="form">
                <div className="form-form">
                  <h4>Leave A Comment</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <textarea
                      name=""
                      className="form-control w-100 h-70 textarea"
                      id=""
                      placeholder="Your comment"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-4 form-button">
                  <input
                    type="submit"
                    className="btn-contact"
                    name=""
                    value="PUBLISH"
                    id=""
                  />
                </div>
              </form>
              {/*  <!-- CONTACT FORM ENDS --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- BLOG SECTION ENDS --> */}
      <Footer />
    </div>
  );
};

export default Blog1;
