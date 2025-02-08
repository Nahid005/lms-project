import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FunFacts = () => {
	const [students, setStudents] = useState(0);
	const [enrolls, setEnrolls] = useState(0);
	const [instructors, setInstractors] = useState(0);
	const [courses, setCourses] = useState(0);

	useEffect(() => {
		const fethStats = async () => {
			const url = `${baseUrl}/api/funfacts`;
			const response = await axios.get(url);
			setStudents(response.data.students);
			setEnrolls(response.data.enrolments);
			setInstractors(response.data.instructors);
			setCourses(response.data.courses);
		};

		fethStats();
	}, []);
	return (
		<>
			<div className="funfacts-area">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-md-6 col-sm-6 col-12 row">
							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
								<div className="single-funfacts-item learners">
									<div className="content">
								
										<p>মোট শিক্ষার্থী </p>
										<h3>{students} + </h3>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
								<div className="single-funfacts-item erolled">
									<p>কোর্স বিক্রি হয়েছে </p>
									<div className="content">
										<h3>{enrolls} + </h3>
										
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
								<div className="single-funfacts-item instractors">
									<div className="content">
									<p> অনলাইন প্রশিক্ষক </p>
										<h3>{instructors} + </h3>
										
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
								<div className="single-funfacts-item demand">
									<div className="content">
										
										<p>অন ​​ডিমান্ড কোর্স</p>
										<h3>{courses} + </h3> 
									</div>
								</div>
							</div>
						</div>
						<div  className="col-md-6 col-sm-6 col-12">
						<img src="/images/7386_Key-Stage-3.webp" alt="image" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FunFacts;
