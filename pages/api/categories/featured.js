import Category from "database/models/category";

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			await handleGet(req, res);
			break;
		default:
			res.status(405).json({
				message: `Method ${req.method} not allowed`,
			});
	}
}

const handleGet = async (req, res) => {
	try {
		const categories = await Category.findAll({
            where: {is_featured: 'Yes' },
			order: [["created_at", "DESC"]],
			limit: 20,
		});

		res.status(200).json({ categories });
	} catch (e) {
		res.status(400).json({
			error_code: "get_categories",
			message: e.message,
		});
	}
};
