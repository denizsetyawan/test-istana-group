const db = require("../config/db");

module.exports = {
    findByUsername: async (username) => {
        const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
        return rows[0];
    }
};
