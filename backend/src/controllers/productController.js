const productModel = require("../models/productModel");

module.exports = {
    getAll: async (req, res) => {
        const products = await productModel.getAll();
        res.json(products);
    },

    getById: async (req, res) => {
        const product = await productModel.getById(req.params.id);
        if (!product) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.json(product);
    },

    create: async (req, res) => {
        const { nama, harga, stok } = req.body;
        await productModel.create(nama, harga, stok);
        res.json({ message: "Produk ditambahkan" });
    },

    update: async (req, res) => {
        const { nama, harga, stok } = req.body;
        await productModel.update(req.params.id, nama, harga, stok);
        res.json({ message: "Produk diupdate" });
    },

    delete: async (req, res) => {
        await productModel.delete(req.params.id);
        res.json({ message: "Produk dihapus" });
    }
};
