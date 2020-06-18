import React from "react";
import { Link } from "react-router-dom";

//import common pages
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

//import css
import "./Blog.css";

// import images
import Img1 from "./images/IMG (1).png";
import Img2 from "./images/img (2).png";
import Img3 from "./images/img (3).png";
import Img4 from "./images/img (4).png";

const Blog = () => {
  return (
    <div>
      <NavBar />
      <section className="page-banner gradient-back curve-bottom w-100">
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-12 col-md-6">
              <div className="inner-container">
                <h6 className="whitetxt mb-2">HOME/BLOG</h6>
                <h1 className="whitetxt mb-4">
                  <strong>Stay updated, Never miss a post</strong>
                </h1>
                <p className="big whitetxt mb-5">
                  Get to know the latest stuff about our services via our blog
                  post.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={Img1} className="img-fluid img-zoom mb-5" />
            </div>
          </div>
        </div>
      </section>
      <div className="blog-info">
        <img src={Img2} className="blog-info-img1" alt="image not found" />
        <div className="blog-info-txt">
          <div>
            <p className="blog-info-txt1 gradient-txt">
              HOW TO SELL YOUR ITUNES GIFTCARD WITH US
            </p>
          </div>
          <div>
            <p className="blog-info-txt2">01 Feb 2019 | Technology</p>
          </div>
          <div>
            {" "}
            <p className="blog-info-txt3">
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea verterem
              persecuti cu est, sea epicuri.
            </p>
          </div>
          <div>
            <button className="blog-info-btn">DISCOVER</button>
          </div>
        </div>
      </div>
      <div className="blog-info">
        <img src={Img3} alt="not loaded" className="blog-info-img1" />
        <div className="blog-info-txt">
          <div>
            <p className="blog-info-txt1 gradient-txt">
              EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT
            </p>
          </div>
          <div>
            {" "}
            <p className="blog-info-txt2">01 Dec 2019 | Lifestyle</p>{" "}
          </div>
          <div>
            <p className="blog-info-txt3">
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea verterem
              persecuti cu est, sea epicuri.
            </p>
          </div>
          <div>
            <button className="blog-info-btn">DISCOVER</button>
          </div>
        </div>
      </div>
      <div className="blog-info">
        <img src={Img4} alt="not-loaded" className="blog-info-img1" />
        <div className="blog-info-txt">
          <div>
            <p className="blog-info-txt1 gradient-txt">
              ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER ETH
            </p>
          </div>
          <div>
            {" "}
            <p className="blog-info-txt2">15 june 2019 | Business</p>
          </div>
          <div>
            <p className="blog-info-txt3">
              Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
              voluptaria in. Ad mei modus quodsi complectitur, postea verterem
              persecuti cu est, sea epicuri.
            </p>
          </div>
          <div>
            <button className="blog-info-btn">DISCOVER</button>
          </div>
        </div>
      </div>
      <div className="blog-pagenation">
        <button
          className="blog-page"

          /* onclick="window.location.href = './blog.html'" */
        >
          <Link to="/blog1">01</Link>
        </button>
        <button
          className="blog-page"
          disabled
          /*  onclick="window.location.href = './blog.html'" */
        >
          02
        </button>
        <button
          className="blog-page"
          disabled
          /* onclick="window.location.href = './blog.html'" */
        >
          03
        </button>
        <button
          className="blog-page blog-dot"
          /*  onclick="window.location.href = './blog.html'" */
        >
          {" "}
          ...{" "}
        </button>
        <button
          className="blog-next"
          /* onclick="window.location.href = './blog.html'" */
        >
          NEXT
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
