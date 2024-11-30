import express from "express";
import {
  createProduct,
  deleteProuct,
  getProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { validateProduct } from "../middleware/validateProduct.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", validateProduct, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProuct);

export default router;
