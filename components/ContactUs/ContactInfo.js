import React from 'react'

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <span className="sub-title"> যোগাযোগের ঠিকানা </span>
        <h2> যোগাযোগ করুন </h2>
        <p>
        Prottoy Academy, ২০২৩ সালে প্রতিষ্ঠিত বাংলাদেশের সর্বাধুনিক শিক্ষা প্রযুক্তি প্রতিষ্ঠান। দেশজুড়ে সবার জন্য মানসম্মত পড়াশোনা নিশ্চিত করতে অভিজ্ঞ মেন্টর এবং অত্যাধুনিক প্রযুক্তির সাহায্যে আমরা গড়ে তুলেছি সহজে শেখার এবং সহজে জেতার এক নতুন দুনিয়া!
        </p>

        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-map"></i>
            </div>
            <h3> আমাদের ঠিকানা </h3>
            <p> House - 88 (Level-3), Lake Drive Road, Sector -7, Uttara, Dhaka -1230 </p>
          </li>
          <li>
            <div className="icon">
              <i className="bx bx-phone-call"></i>
            </div>
            <h3> যোগাযোগ </h3>
            <p>
            মুঠোফোন: <a href="+880 1777 373111"> +880 1777 373111 </a>
            </p>
            <p>
            মেইল: <a href="info.prottoy360@gmail.com">info.prottoy360@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ContactInfo
