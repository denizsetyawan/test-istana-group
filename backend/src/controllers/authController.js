const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await userModel.findByUsername(username);
            if (!user) return res.status(400).json({ message: "User tidak ditemukan" });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: "Password salah" });

            const token = jwt.sign(
                { id: user.id, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            res.json({
                message: "Login berhasil",
                token
            });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    logout: async (req, res) => {
        res.json({ message: "Logout berhasil" });
    }
};
