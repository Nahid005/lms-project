import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/About_images.jpeg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title"> আমাদের গল্প </span>
                <h2> প্রত্যয় একাডেমীতে আপনাকে স্বাগতম! </h2>
                <p>
                তথ্য ও প্রযুক্তি আমাদের দৈনন্দিন জীবনের গুরুত্বপূর্ণ অংশ হয়ে গেছে, কিন্তু শিক্ষা ক্ষেত্রে এখনও গতানুগতিক ধারাটিই রয়ে গেছে। Prottoy Academy মনে করে বাংলাদেশের শিক্ষা ক্ষেত্রে প্রযুক্তির বিপ্লব ঘটানোর এখনই উপযুক্ত সময়।
                </p>

                <p>
                আমাদের মূল লক্ষ্য শুধুই গতানুগতিক শিক্ষার আধুনিকায়ন নয়, সেইসাথে আধুনিক প্রযুক্তি ব্যবহার করে শেখার নতুন কৌশলকে সহজলভ্য করে তোলা এবং ইন্টারনেটকে কাজে লাগিয়ে দেশজুড়ে সবার কাছে মানসম্মত শিক্ষা পৌঁছে দেয়া। নতুন কিছু করার ভাবনা থেকেই প্রতিটি কোর্স শিক্ষার্থীদের জন্য উপযোগী, সহজবোধ্য এবং আনন্দদায়ক করে তৈরি করা হয়েছে। অভিজ্ঞ শিক্ষক এবং অত্যাধুনিক প্রযুক্তির সমন্বয়ে আমরা এমন একটি অভিজ্ঞতা গড়ে তুলেছি, যা শিক্ষার মান উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখবে।
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                        <img src="/images/icon/teacher.png" alt="image" /> বিশেষজ্ঞ প্রশিক্ষক
                    </span>
                  </li>
                  <li>
                    <span>
                    <img src="/images/icon/quality-of-life.png" alt="image" /> লাইফটাইম অ্যাক্সেস
                    </span>
                  </li>
                  <li>
                    <span>
                    <img src="/images/icon/book.png" alt="image" /> দূরবর্তী শিক্ষা
                    </span>
                  </li>
                  <li>
                    <span>
                    <img src="/images/icon/self-growth.png" alt="image" /> স্ব-উন্নয়ন
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
