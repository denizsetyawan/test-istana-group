const db = require("../config/db");

module.exports = {

    create: async (product_id, jumlah, total_harga) => {
        await db.query(
            "INSERT INTO orders (product_id, jumlah, total_harga) VALUES (?, ?, ?)",
            [product_id, jumlah, total_harga]
        );
    },

    getAll: async () => {
        const [rows] = await db.query(`
          SELECT o.id, p.nama, o.jumlah, o.total_harga, o.created_at
          FROM orders o
          JOIN products p ON o.product_id = p.id
          ORDER BY o.id DESC
        `);
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query(`
        SELECT o.id, p.nama, o.jumlah, o.total_harga, o.created_at
        FROM orders o
        JOIN products p ON o.product_id = p.id
        WHERE o.id = ?
        `, [id]);

        return rows[0];
    },

};
