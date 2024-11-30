import express from "express";
import path from "path";
import connectToDb from "./config/db.js";
import { config } from "dotenv";
import productRouter from "./routes/product.route.js";
import cors from "cors";
import { seedProducts } from "./seeds/products.seed.js";

// seedProducts();

config();
const app = express();
app.use(cors());
const port = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());
app.use("/api/products", productRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// db connection
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
});
