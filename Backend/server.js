import express from "express";
import connectToDb from "./config/db.js";
import { config } from "dotenv";
import productRouter from "./routes/product.route.js";

const app = express();
const port = process.env.PORT || 3000;
config();

app.use(express.json());
app.use("/products", productRouter);

// db connection
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
});
