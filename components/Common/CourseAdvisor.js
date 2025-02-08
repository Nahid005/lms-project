import React, { useState, useEffect } from "react";
import CourseSkeletonLoader from "@/utils/CourseSkeletonLoader";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import Link from "next/link";

const CourseAdvisor = () => {
  const [advisors, setAdvisors] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fatchAdvisors = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${baseUrl}/api/instructor/about_list`);
      setAdvisors(response.data.instructors);
      setLoading(false);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fatchAdvisors();
  }, []);

  return (
    <>
      <div className="advisor-area bg-f9f9f9 ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"> প্রশিক্ষক </span>
            <h2> কোর্স উপদেষ্টা </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">

            {loading ? (<CourseSkeletonLoader />) : (
              advisors && advisors.map(advisor => (
                <div className="col-lg-3 col-md-6" key={advisor.id}>
                  <div className="single-advisor-box">
                    <div className="advisor-image">
                      <img src={advisor.profile_photo} alt="image" />
                    </div>
                    <div className="advisor-content">
                      <h3>
                        <Link href={`courses/instructor/courses/${advisor.id}`}>
                          <a className="d-block image">
                            {advisor.first_name} {advisor.last_name}
                          </a>
                        </Link>
                      </h3>
                      <span className="sub-title"> {advisor.designation} </span>
                      <ul className="social-link">
                        <li>
                          <a
                            href={advisor.facebook}
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={advisor.twitter}
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={advisor.youtube}
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={advisor.linkedin}
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={advisor.websit}
                            className="d-block"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-website"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))

            )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseAdvisor
