import React from "react";

const LoadingSpinner = () => {
	return (
		<>
			<style jsx>{`
				.spinner-border {
					height: 20px;
					left: 8px;
					border-bottom: 3px solid #000;
					border-left: 3px solid #000;
					border-top: 3px solid #000;
					top: 3px;
					position: relative;
					width: 20px;
				}
			`}</style>
			<div className="spinner-border text-secondary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</>
	);
};

export default LoadingSpinner;
