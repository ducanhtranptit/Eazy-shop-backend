const getStockId = require("../../utils/get_stock_id");
const model = require("../../models/index");
const Product = model.Product;
const Invoice = model.Invoice;
const Stock = model.Stock;
const Invoice_detail = model.Invoice_detail;

class InvoiceController {
	async createInvoice(req, res) {
		const { user_id, customer_id, product_list } = req.body;
		const stockId = await getStockId(req.body.userId);

		const products = [];

		await Promise.all(
			product_list.map(async (product) => {
				const productCheck = await Stock.findOne({
					where: {
						id: stockId,
					},
					attributes: [],
					include: {
						model: Product,
						where: {
							id: product.product_id,
						},
					},
				});
				products.push(productCheck);
			})
		);

		res.json({
			products,
		});
	}
	async deleteInvoice(req, res) {}
	async getCustomerInvoice(req, res) {}
	async getCustomerInvoiceDetail(req, res) {}
}

module.exports = new InvoiceController();
