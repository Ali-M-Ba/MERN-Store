import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("error occurred while fetching the products", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Product Id" });
    }
  
    const product = await Product.findById(id);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("error occurred while fetching the product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true, // Run schema validators on the updated product data
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "The product not found" });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("error occurred while updating the product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteProuct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "The product not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "The product deleted successfully" });
  } catch (error) {
    console.error("error occurred while deleting the product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
