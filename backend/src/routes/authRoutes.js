const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", authController.login);
router.post("/logout", authMiddleware.protect, authController.logout);
router.get("/me", authMiddleware.protect, (req, res) => {
    res.json(req.user);
});

module.exports = router;
