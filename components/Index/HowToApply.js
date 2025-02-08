import React from "react"; 

const HowToApply = () => {
  return (
    <>
      <div className="information-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="information-content">
                <span className="sub-title"> তথ্য ডেস্ক </span>
                <h2> কিভাবে আবেদন করতে হবে? </h2>
                <ul className="apply-details">
                  <li>
                    <div className="icon">
                      <i className="flaticon-checkmark"></i>
                    </div>
                    <h3> উপযুক্ত কোর্স নির্বাচন করুন </h3>
                    <p> প্রথমে উপযুক্ত কোর্স নির্বাচন করুন</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-webinar"></i>
                    </div>
                    <h3> শিক্ষার্থীর তথ্য </h3>
                    <p> শিক্ষার্থীর তথ্য দিন</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-credit-card-1"></i>
                    </div>
                    <h3> পেমেন্ট তথ্য </h3>
                    <p> পেমেন্ট তথ্য দিন</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-verify"></i>
                    </div>
                    <h3> নিবন্ধন করুন </h3>
                    <p> অনলাইন নিবন্ধন করুন </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="information-image text-center">
                <img src="/images/join.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToApply;
