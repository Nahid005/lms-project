import React from "react";

const WhoIsThisCourseFor = ({ who_is_this_course_for }) => {
	return (
		<>
			<div className="mb-4">
				<h3>Who This Course is For:</h3>
				<div
					dangerouslySetInnerHTML={{ __html: who_is_this_course_for }}
				></div>
			</div>
		</>
	);
};

export default WhoIsThisCourseFor;
