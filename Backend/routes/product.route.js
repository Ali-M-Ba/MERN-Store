import express from "express";
import {
  createProduct,
  deleteProuct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { validateProduct } from "../Middleware/validateProduct.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", validateProduct, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProuct);

export default router;
