import { Course, User, Enrolment } from "database/models";

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			await handleGetRequest(req, res);
			break;
		default:
			res.status(405).json({
				message: `Method ${req.method} not allowed`,
			});
	}
}

const handleGetRequest = async (req, res) => {
	const { userId, page, limit } = req.query;
	const pageNumber = parseInt(page);
	const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
	const coursesOffset = limit * (getRealNumber - 1);
	const LIMIT = parseInt(limit);

	try {
		let totalPages;
		totalPages = await Course.count({ where: { userId: userId, approved: true } });
		
		const courses = await Course.findAll({
			order: [["created_at", "DESC"]],
			include: [
				{
					model: User,
					as: "user",
					attributes: ["first_name", "last_name", "profile_photo"],
				},
				{
					model: Enrolment,
					as: "enrolments",
					attributes: ["id"],
				},
			],
			where: { userId: userId },
			offset: coursesOffset,
			limit: LIMIT,
		});

		const instructor = await User.findOne({
			where: { id: userId },
		});

		const coursesCount = await Course.count({ where: { userId: userId, approved: true } });

		totalPages = Math.ceil(totalPages / limit);

		res.status(200).json({
			instructor,
			courses,
			totalPages,
			coursesCount,
		});
	} catch (e) {
		res.status(400).json({
			error_code: "get_my_courses",
			message: e.message,
		});
	}
};
