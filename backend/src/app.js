const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));