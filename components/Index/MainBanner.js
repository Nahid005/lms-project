import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const MainBanner = ({ user }) => {
  return (
    <>
        <div className="course-video main-slider-video">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className=" w-100 mw-100 main-slider" 
            style={{marginLeft: '0px !important'}}
          >
{/* style={{backgroundImage:"url('/images/banner/prottoy_banner_1.jpg')"}} */}
            <SwiperSlide className="w-100">
              <div className="main-banner-wrapper" style={{backgroundImage:"url('/images/banner/Banner-1.jpg')"}}>
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                      <div className="main-banner-wrapper-content">
                        {/* <h1> লক্ষ্য এবার দক্ষ হবার </h1>
                        <p>
                          ২১ শতকে একমাত্র দক্ষতা যা গুরুত্বপূর্ণ হবে তা হল নতুন দক্ষতা শেখার দক্ষতা। সময়ের সাথে সাথে অন্য সবকিছু অপ্রচলিত হয়ে যাবে।
                        </p> */}

                        <motion.div whileTap={{ scale: 0.9 }}>
                          {user ? (
                            <Link href="/courses">
                              <a className="default-btn" style={{marginTop:200}}>
                                <i className="flaticon-user"></i> কোর্স ব্রাউজ করুন {" "}
                                <span></span>
                              </a>
                            </Link>
                          ) : (
                            <Link href="/login">
                              <a className="default-btn" style={{marginTop:190}}>
                                <i className="flaticon-user"></i> সকল কোর্স দেখুন {" "}
                                <span></span>
                              </a>
                            </Link>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>
            
          </Swiper>
				</div>
    </>
  );
};

export default MainBanner;
