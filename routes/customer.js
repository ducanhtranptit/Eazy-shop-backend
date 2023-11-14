const express = require("express");
const router = express.Router();

const CustomerController = require("../controllers/api/customer.controller");

router.get("/", CustomerController.getCustomers);
router.post("/", CustomerController.createCustomer);
router.patch("/:id", CustomerController.storeCustomer);
router.delete("/:id", CustomerController.deleteCustomer);
router.get("/check-customer", CustomerController.checkAvalibleCustomer);

module.exports = router;
