const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/api/product.controller");

router.get("/categories", ProductController.getCategories);
router.get("/", ProductController.getProducts);
router.post("/", ProductController.createProduct);
router.patch("/:id", ProductController.storeProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
