import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { useRouter } from "next/router";

const CourseCard = ({
  id,
  title,
  slug,
  short_desc,
  latest_price,
  before_price,
  lessons,
  image,
  user,
  enrolments = [],
  onFav,
  onUnFav,
  userId,
}) => {
  const [fav, setfavs] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (userId) {
      const payload = {
        params: {
          userId: userId,
          courseId: id,
        },
      };

      const url = `${baseUrl}/api/favourites/new`;
      axios.get(url, payload).then((result) => {
        setfavs(result.data);
        // console.log(result.data);
      });
    }
  }, []);

  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-courses-box">
        <div className="courses-image">
          <Link href={`/course/${slug}`}>
            <a className="d-block image">
              <img src={image} alt={title} />
            </a>
          </Link>

          {fav ? (
            <button
              className="btn fav"
              onClick={() => {
                onUnFav(id);
                setfavs(!fav);
              }}
            >
              <i className="bx bxs-heart"></i>
            </button>
          ) : (
            <button
              className="btn fav"
              onClick={() => {
                onFav(id);
                setfavs(!fav);
              }}
            >
              <i className="bx bx-heart"></i>
            </button>
          )}
        </div>

        <div className="courses-content">
          <div className="course-author d-flex align-items-center">
            <img
              src={user.profile_photo ? user.profile_photo : "/images/user6.jpg"}
              className="rounded-circle"
              alt="image"
            />
            <span>{`${user.first_name} ${user.last_name}`}</span>
          </div>

          <h3 className="font-weight-black">
            <Link href={`/course/${slug}`}>
              <a title={title}>{title.slice(0, 40)}...</a>
            </Link>
          </h3>

          {/* <p>{short_desc.slice(0, 108)}</p> */}

          <ul className="courses-box-footer d-flex justify-content-between align-items-center">
            <li>
              <i className="flaticon-agenda"></i> {lessons} Class
            </li>
            <li>
              <i className="flaticon-people"></i> {enrolments.length} Students
            </li>
          </ul>
          <>
            <div className="price">
              <span> Price: </span>
              {before_price > 0 && (
                <div className="discount-price">
                  <del> &#2547; {before_price} </del>
                </div>
              )}
              <div className="last_price"> &#2547; {latest_price} </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
