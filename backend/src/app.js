const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));