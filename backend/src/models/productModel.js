const db = require("../config/db");

module.exports = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM products");
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
        return rows[0];
    },

    create: async (nama, harga, stok) => {
        await db.query(
            "INSERT INTO products (nama, harga, stok) VALUES (?, ?, ?)",
            [nama, harga, stok]
        );
    },

    update: async (id, nama, harga, stok) => {
        await db.query(
            "UPDATE products SET nama = ?, harga = ?, stok = ? WHERE id = ?",
            [nama, harga, stok, id]
        );
    },

    delete: async (id) => {
        await db.query("DELETE FROM products WHERE id = ?", [id]);
    },
};
