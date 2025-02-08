import React from "react";

const CourseOverview = ({ overview }) => {
	return (
		<div className="courses-details-desc-style-two mb-4">
			<h3>About This Course</h3>
			<div dangerouslySetInnerHTML={{ __html: overview }}></div>
		</div>
	);
};

export default CourseOverview;
