const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middlewares/authMiddleware");

router.get("/", auth.protect, productController.getAll);
router.get("/:id", auth.protect, productController.getById);
router.post("/", auth.protect, productController.create);
router.put("/:id", auth.protect, productController.update);
router.delete("/:id", auth.protect, productController.delete);

module.exports = router;
