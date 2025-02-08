const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://lms.ecocolourchem.com"
		: "http://localhost:3000";

export default baseUrl;
