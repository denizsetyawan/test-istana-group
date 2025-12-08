const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth.protect, orderController.create);
router.get("/", auth.protect, orderController.getAll);
router.get("/:id", auth.protect, orderController.getById);

module.exports = router;
