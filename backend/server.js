import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // This will allow us to parse JSON data from the request body

app.use("/api/products", productRoutes)

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 hello");
});

// lacidaromelo_db_user GbSWuc56x2ts5dcs
