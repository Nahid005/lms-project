import React, { useEffect, useState } from "react";
import Link from "next/link";
import CoursesDetailsSidebar from "./CoursesDetailsSidebar";
import CourseOverview from "../Learning/CourseOverview";
import CourseVideo from "../Course/CourseVideo";
import WhatYouWillLearn from "../Course/WhatYouWillLearn";
import Requirements from "../Course/Requirements";
import WhoIsThisCourseFor from "../Course/WhoIsThisCourseFor";
import InstructorProfile from "../Course/InstructorProfile";
import InstructorCourses from "../Courses/InstructorCourses";
import { formatDate } from "@/utils/helper";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import CourseSkeletonLoader from "@/utils/CourseSkeletonLoader";

const CoursesDetailsContent = ({ user: current_user, course }) => {

	const {
		slug,
		short_desc,
		image,
		overview,
		what_you_will_learn,
		who_is_this_course_for,
		requirements,
		latest_price,
		is_class,
		updated_at,
		category,
		user,
		enrolments,
		userId
	} = course;
	const [videos, setVideos] = useState([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchVideos = async () => {
			setLoading(true);
			const url = `${baseUrl}/api/learnings/videos/${course.slug}`;
			const response = await axios.get(url);
			const video = response.data.videos[0];
			setVideos(video);
			setLoading(false);
		};
		fetchVideos();
	}, [course]);

	const discount = useSelector((state) => state.cart.discount);

	return (
		<>
			<div className="courses-details-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="courses-title">
								<p>{short_desc}</p>
							</div>
							<div className="course-video">
								{loading ? (<CourseSkeletonLoader />) :
									<video
										style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
										playsInline
										loop
										autoPlay
										muted
										controls
										alt="All the devices"
										src={videos && videos.video}
									/>
								}
							</div>

							<div className="courses-meta courses-meta-header">
								<ul>
									<li>
										<i className="bx bx-folder-open"></i>
										<span>Category</span>
										{category && (
											<Link
												href={`/category/${category.slug}`}
											>
												<a>{category.name}</a>
											</Link>
										)}
									</li>
									<li>
										<i className="bx bx-group"></i>
										<span>Students Enrolled</span>
										<Link href="#">
											<a>
												{enrolments &&
													enrolments.length}
											</a>
										</Link>
									</li>
									<li>
										<i className="bx bx-calendar"></i>
										<span>Last Updated</span>
										<Link href="#">
											<a>{formatDate(updated_at)}</a>
										</Link>
									</li>
								</ul>
							</div>

							<div className="courses-details-desc-style-two">
								<div className="course-tabs">
									<Tabs>
										<TabList>
											<Tab> About in this course </Tab>
											<Tab> Lessons in this course </Tab>
											<Tab> Instructor courses </Tab>
										</TabList>

										<TabPanel>
											<CourseOverview overview={overview} />
											{user && (
												<InstructorProfile instructor={user} />
											)}
										</TabPanel>
										<TabPanel>
											<div>
												{!is_class && (
													<div className="mb-4">
														<h3>Courses Video</h3>
														{slug && (
															<CourseVideo
																current_user={current_user}
																course={course}
															/>
														)}
													</div>
												)}
												<WhatYouWillLearn
													what_you_will_learn={what_you_will_learn}
												/>

												<Requirements requirements={requirements} />

												<WhoIsThisCourseFor
													who_is_this_course_for={
														who_is_this_course_for
													}
												/>
											</div>
										</TabPanel>
										<TabPanel>
											{user && (
												<InstructorCourses instructor={user} />
											)}
										</TabPanel>
									</Tabs>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<CoursesDetailsSidebar
								current_user={current_user}
								course={course}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsContent;
