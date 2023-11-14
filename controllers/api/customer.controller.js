const model = require("../../models/index");
const User = model.User;
const Customer = model.Customer;

class CustomerController {
	async getCustomers(req, res) {}

	async createCustomer(req, res) {
		const { name, phone } = req.body;

		if (!name || !phone) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		} else {
			const customer = await Customer.findOne({
				where: {
					phone: phone,
				},
			});

			if (customer) {
				return res.status(409).json({
					status: "Erorr",
					message: "Customer already exists",
				});
			} else {
				const customerData = {
					name: name,
					phone: phone,
				};
				const user = await User.findByPk(req.body.userId);

				try {
					const newCustomer = await user.createCustomer(customerData);
					return res.status(201).json({
						status: "Success",
						message: "Customer created successfully",
						data: newCustomer,
					});
				} catch (e) {
					return res.status(500).json({
						status: "Error",
						message: "Server Internal",
					});
				}
			}
		}
	}

	async storeCustomer(req, res) {
		const { id } = req.params;
		const { name, phone } = req.body;

		if (!name || !phone || !id) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		} else {
			const customer = await Customer.findByPk(id);
			try {
				await customer.update({
					name: name,
					phone: phone,
				});
				return res.status(201).json({
					status: "Success",
					message: "Customer updated successfully",
				});
			} catch (e) {
				return res.status(500).json({
					status: "Error",
					message: "Server Internal",
				});
			}
		}
	}

	async deleteCustomer(resq, res) {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		} else {
			try {
				const customer = await Customer.findByPk(id);

				if (!customer) {
					return res.status(404).json({
						status: "Error",
						message: "Customer not found",
					});
				} else {
					await customer.removeUser(await User.findAll());

					await customer.destroy();

					return res.status(200).json({
						status: "Success",
						message: "Customer deleted successfully",
					});
				}
			} catch (e) {
				return res.status(500).json({
					status: "Error",
					message: "Server Internal",
				});
			}
		}
	}

	async checkAvalibleCustomer(req, res) {
		const { phone } = req.body;

		if (!phone) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		} else {
			try {
				const customer = await Customer.findOne({
					where: {
						phone,
					},
				});
				if (!customer) {
					return res.status(404).json({
						status: "Not found",
						message: "Customer not found",
					});
				} else {
					return res.status(200).json({
						status: "Success",
						message: "Customer exists",
						data: customer,
					});
				}
			} catch (e) {
				return res.status(500).json({
					status: "Error",
					message: "Server Internal",
				});
			}
		}
	}

	async getCustomerInvoice(req, res) {}

	async getCustomerInvoiceDetail(req, res) {}
}

module.exports = new CustomerController();
