/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},

	// Update here your access credential
	env: {
		JWT_SECRET: "asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm",
		AWS_SES_USER: "<Update here AWS_SES_USER>",
		AWS_SES_PASSWORD: "<Update here AWS_SES_PASSWORD>",
		CLOUD_NAME: "dcrjmjyba",
		UPLOAD_PRESETS: "uhc972if",
		CLOUDINARY_URL:
			"https://api.cloudinary.com/v1_1/dcrjmjyba/image/upload",
		CLOUDINARY_VIDEO_URL:
			"https://api.cloudinary.com/v1_1/dcrjmjyba/video/upload",
		CLOUDINARY_ZIP_URL:
			"https://api.cloudinary.com/v1_1/dcrjmjyba/raw/upload",
		STRIPE_SECRET_KEY: "<Update here STRIPE_SECRET_KEY>",
		STRIPE_PUBLISHABLE_KEY: "<Update here STRIPE_PUBLISHABLE_KEY>",
	},
};

module.exports = nextConfig;
