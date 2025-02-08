import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import toast from "react-hot-toast";
import CourseCard from "./CourseCard";
import { useRouter } from "next/router";
import Pagination from "@etchteam/next-pagination";
import ShortingDropdown from "./ShortingDropdown";
import CourseSkeletonLoader from "@/utils/CourseSkeletonLoader";

const CoursesList = ({ user }) => {
  const [filterCourses, setFilterCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const router = useRouter();
  const page = router.query.page ? router.query.page : "1";
  const size = router.query.size ? router.query.size : "9";
  const short = router.query.short ? router.query.short : "";
  const search = router.query.search ? router.query.search : "";

  const fetchCategories = async () => {
    setLoading(true);
    const response = await axios.get(`${baseUrl}/api/categories/featured`);
    setCategories(response.data.categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleselect = async (e) => {
    const value = e.target.value;
    const response = await axios.get(`${baseUrl}/api/categories/${value}`);
    const fetchData = await response.data.courses.courses;
    if (e.target.checked) {
      setLoading(true);
      setFilterCourses([...filterCourses, ...fetchData])
      setLoading(false);
    }
  
    const filterdata = (fetchData, filterCourses) => {
      if (fetchData !== filterCourses) {
        return fetchData
      }
    }
    const filter = filterdata(fetchData, filterCourses)
    setFilterCourses(filter)
  };
  
  const fetchCourses = async () => {
    setLoading(true);
    const payload = {
      params: {
        page,
        limit: size,
        short: short,
        search: search,
      },
    };
    const response = await axios.get(`${baseUrl}/api/all-courses`, payload);
    setCourses(response.data.courses);
    setPages(response.data.totalPages);
    setCoursesCount(response.data.coursesCount);
    setLoading(false);
  };
  useEffect(() => {
    fetchCourses();
  }, [page, size, short, search]);
  const handleFav = async (courseId, fav) => {
    if (!user) {
      toast.error("Need to login first.", {
        style: {
          border: "1px solid #ff0033",
          padding: "16px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    try {
      const payload = {
        userId: user.id,
        courseId: courseId,
        fav: fav,
      };
      const url = `${baseUrl}/api/favourites/new`;
      const response = await axios.post(url, payload);

      toast.success(response.data.message, {
        style: {
          border: "1px solid #42ba96",
          padding: "16px",
          color: "#42ba96",
        },
        iconTheme: {
          primary: "#42ba96",
          secondary: "#ffffff",
        },
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <>
      <div className="courses-area courses-section course-short pt-50 pb-100">
        <div className="container">
          <div className="row">
            {/* side bar */}
            <div className="col-md-3">
              <div className="lisbo-grid-sorting row align-items-center mb-5">
                <div className="col-lg-9 col-md-12 ordering">
                  <h3 className="border-bottom border-2 pb-3 mb-3">
                    All Categories
                  </h3>
                  {/* ShortingDropdown */}
                  <ShortingDropdown />
                  <ul className="p-0">
                    <div
                      className="text-start check-slide mb-3"
                      type="checkbox"
                    >
                    </div>
                    {categories &&
                      categories.map((catagors) => (
                        <div
                          className="text-start check-slide mb-3 d-flex align-items-center"
                          type="checkbox"
                          key={catagors.id}
                        >
                          <input
                            type="checkbox"
                            name={catagors.slug}
                            onChange={handleselect}
                            value={catagors.slug}
                            style={{ width: "20px", height: "20px" }}
                          />
                          <lable
                            className="ms-3"
                            style={{ fontSize: "smaller" }}
                          >
                            {catagors.name}
                          </lable>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Courses */}
            <div className="col-md-9">
              <div className="row">
                {loading ? (
                  <CourseSkeletonLoader />
                ) : (
                  <>
                    {filterCourses.length > 0
                      ? filterCourses.map((filterData) => (
                        <CourseCard
                          key={filterData.id}
                          {...filterData}
                          onFav={() => handleFav(filterData.id, true)}
                          onUnFav={() => handleFav(filterData.id, false)}
                          userId={user && user.id}
                        />
                      ))
                      : courses &&
                      courses.map((course) => (
                        <CourseCard
                          key={course.id}
                          {...course}
                          onFav={() => handleFav(course.id, true)}
                          onUnFav={() => handleFav(course.id, false)}
                          userId={user && user.id}
                        />
                      ))}

                    {coursesCount > 9 && (
                      <div className="col-lg-12 col-md-12">
                        <div className="pagination-area text-center">
                          <Pagination sizes={[1]} total={pages} />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesList;
