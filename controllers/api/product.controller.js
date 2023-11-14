const model = require("../../models/index");
const Category = model.Category;
const Product = model.Product;

class ProductController {
	async getCategories(req, res) {
		try {
			const categories = await Category.findAll();
			return res.status(200).json({
				status: "Success",
				data: categories,
			});
		} catch (e) {
			return res.status(500).json({
				status: "Error",
				message: "Server Internal",
			});
		}
	}

	async getProducts(req, res) {}

	async createProduct(req, res) {
		const { name, price, categoryId } = req.body;

		if ((!name, !price, !categoryId)) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		} else {
			try {
				const product = await Product.findOne({
					where: {
						name: name,
					},
				});

				if (product) {
					return res.status(409).json({
						status: "Erorr",
						message: "Product already exists",
					});
				} else {
					const category = await Category.findOne({
						where: {
							id: categoryId,
						},
					});

					if (!category) {
						return res.status(400).json({
							status: "Error",
							message: "Category Invalid",
						});
					} else {
						await category.createProduct({
							name: name,
							price: price,
							quantity: 1,
						});

						return res.status(200).json({
							status: "Success",
							message: "Product created successfully",
						});
					}
				}
			} catch (e) {
				return res.status(500).json({
					status: "Error",
					message: "Server Internal",
				});
			}
		}
	}

	async storeProduct(req, res) {}

	async deleteProduct(req, res) {}
}
module.exports = new ProductController();
