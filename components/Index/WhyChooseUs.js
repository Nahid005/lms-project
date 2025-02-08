import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image text-center">
                <img src="/images/about-img.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">Why choose us</span>
                <h2 className="font-weight-black">
                  Language Courses to Help You Explore The World
                </h2>
                <p>
                We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!
                </p>
     
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Skiled Teachers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Afordable Courses
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Efficient & Flexible
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Lifetime Accesss
                    </span>
                  </li>
                </ul>

                <Link href="/about-us">
                  <a className="default-btn">
                    <i className="flaticon-user"></i> More About Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
