import React from "react";

const Requirements = ({ requirements }) => {
	return (
		<>
			<div className="mb-4">
				<h3>Requirements</h3>
				<div dangerouslySetInnerHTML={{ __html: requirements }}></div>
			</div>
		</>
	);
};

export default Requirements;
