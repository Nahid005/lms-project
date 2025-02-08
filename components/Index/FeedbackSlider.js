import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";

const FeedbackSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      const url = `${baseUrl}/api/testimonials`;
      const response = await axios.get(url);
      setTestimonials(response.data.testimonials);
    };
    fetchTests();
  }, []);

  return (
    <>
      <div 
        className="feedback-with-bg-image ptb-100" 
        style={{ backgroundImage: `url(/images/testimonial.png)` }}
      >
        <div className="container">
          <Swiper
            slidesPerView={2}
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
            className="feedback-slides w-100 mw-100" 
            style={{marginLeft: '0px !important'}}
          >
            {testimonials.length > 0 &&
              testimonials.map((teste) => (
                <SwiperSlide key={teste.id}>
                  <div className="single-feedback-item-box">
                    <div className="client-info d-flex align-items-center w-100">
                            <img
                              src={teste.image_url}
                              alt="image"
                            />
                      </div>
                      <div className="content">
                      <p>{teste.description}</p>
                        <div className="title">
                          <h3>{teste.name}</h3>
                          <span>{teste.designation}</span>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
