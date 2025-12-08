const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

module.exports = {

    create: async (req, res) => {
        try {
            const { product_id, jumlah } = req.body;

            const product = await productModel.getById(product_id);
            if (!product) return res.status(404).json({ message: "Produk tidak ditemukan" });

            if (product.stok < jumlah) {
                return res.status(400).json({ message: "Stok tidak cukup" });
            }

            const total_harga = product.harga * jumlah;

            await orderModel.create(product_id, jumlah, total_harga);

            await productModel.update(product.id, product.nama, product.harga, product.stok - jumlah);

            res.json({ message: "Pesanan berhasil dibuat" });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAll: async (req, res) => {
        const orders = await orderModel.getAll();
        res.json(orders);
    },

    getById: async (req, res) => {
        const order = await orderModel.getById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order tidak ditemukan" });
        res.json(order);
    }

};
