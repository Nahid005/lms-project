import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import CourseSkeletonLoader from "@/utils/CourseSkeletonLoader";
import CourseCard from "@/components/Courses/CourseCard";
import Pagination from "@etchteam/next-pagination";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import toast from "react-hot-toast";

const Index = ({ user }) => {
	const router = useRouter();
	const { id } = router.query;
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pages, setPages] = useState(0);
	const [coursesCount, setCoursesCount] = useState(0);
	const page = router.query.page ? router.query.page : "1";
	const size = router.query.size ? router.query.size : "9";

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				setLoading(true);
				const payload = {
					params: { userId: id, page, limit: size },
				};
				const url = `${baseUrl}/api/courses/instructor/courses`;
				const response = await axios.get(url, payload);
				setCourses(response.data.courses);
				setPages(response.data.totalPages);
				setCoursesCount(response.data.coursesCount);
			} catch (err) {
				let {
					response: {
						data: { message },
					},
				} = err;
				toast.error(message, {
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
			} finally {
				setLoading(false);
			}
		};

		fetchCourses();
	}, [id, page, size]);

	return (
		<>
			<Navbar user={user} />

			<PageBanner
				pageTitle="Courses"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
			/>

			<div className="courses-area courses-section course-short pt-50 pb-100">
				<div className="container">
					<div className="col-md-12">
						<div className="row">
							{loading ? (<CourseSkeletonLoader />) : (
								courses && courses.map((course) => (
									<CourseCard
										key={course.id}
										{...course}
										onFav={() => handleFav(course.id, true)}
										onUnFav={() => handleFav(course.id, false)}
										userId={user && user.id}
									/>
								))
							)}
							{coursesCount > 9 && (
								<div className="col-lg-12 col-md-12">
									<div className="pagination-area text-center">
										<Pagination sizes={[1]} total={pages} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Index;
