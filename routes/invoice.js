const express = require("express");
const router = express.Router();

const InvoiceController = require("../controllers/api/invoice.controller");

router.post("/", InvoiceController.createInvoice);
router.delete("/:id", InvoiceController.deleteInvoice);
router.get("/customer-invoice/:id", InvoiceController.getCustomerInvoice);
router.get("/customer-invoice-detail/:id", InvoiceController.getCustomerInvoiceDetail);

module.exports = router;
