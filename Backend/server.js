import express from "express";
import connectToDb from "./config/db.js";
import { config } from "dotenv";
import productRouter from "./routes/product.route.js";
import cors from "cors";
import { seedProducts } from "./seeds/products.seed.js";

// seedProducts();

config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/products", productRouter);

// db connection
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
});
