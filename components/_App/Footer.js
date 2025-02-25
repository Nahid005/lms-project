import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>

                <p>
                লক্ষ্য এবার দক্ষ হবার - এই মূলমন্ত্র নিয়ে Edtech প্ল্যাটফর্ম "প্রত্যয়" ডিজিটাল বাংলাদেশ-কে স্মার্ট বাংলাদেশ বিনির্মাণে নিরলসভাবে কাজ করছে
                </p>

                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/prottoy360bd?mibextid=ZbWKwL" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/prottoy360bd?t=86nZG109V5sUzE79AQkgig&s=08" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@prottoy360bd?si=YuTziEXrdLxzOtgW" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 offset-lg-1">
              <div className="single-footer-widget">
                <h3>Explore</h3>
                <ul className="footer-links-list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses">
                      <a>Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
 
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Address</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    House - 88 (Level-3), Lake Drive Road, Sector -7, Uttara, Dhaka -1230
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="phone:+880 1777 373111"> +880 1777 373111</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href="mailto:info.prottoy360@gmail.com"> info.prottoy360@gmail.com </a>
                  </li>
                  <li>
                    <i className="bx bxs-inbox"></i>
                    <a href="phone:+880 1332 412131">+880 1332 412131</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center text-center">
              <div className="col-lg-12 col-md-12">
                <p>
                  &copy;
                  {currentYear} Prottoy Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
