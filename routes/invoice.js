const express = require("express");
const router = express.Router();

const InvoiceController = require("../controllers/api/invoice.controller");

router.post("/", InvoiceController.createInvoice);
router.delete("/:id", InvoiceController.deleteInvoice);

module.exports = router;
