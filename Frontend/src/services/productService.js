// services/productService.js
const API_URL = "/api/products";

export const getProduct = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (product) => {
  if (!product.name || !product.price || !product.image) {
    console.error("Invaild product details: ", product);
    return { success: false, message: "Invaild product details" };
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    // Parsing the respones into a separate try/catch to catch any error that may occur
    let jsonResponse;
    try {
      jsonResponse = await res.json();
    } catch (error) {
      console.error("Failed to parse JSON response:", error);
      return {
        success: false,
        message: "Error Occured while parsing the response.",
      };
    }

    if (!res.ok) {
      console.error("Error:", res.status, jsonResponse);
      return { success: false, message: jsonResponse.message };
    }

    const { success, data } = jsonResponse;
    // console.log("The product added successfully: ", data)
    return { success, message: "Product added successfully" };
  } catch (error) {
    console.error("Error adding product:", error);
    return {
      success: false,
      message: error.message,
    };
  }
};

export const updateProduct = async (id, Product) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Product),
    });

    let jsonResponse;
    try {
      jsonResponse = await res.json();
    } catch (error) {
      console.error("Failed to parse JSON response:", error);
      return {
        success: false,
        message: "Error Occured while parsing the response.",
      };
    }

    if (!res.ok) {
      console.error("Error:", res.status, jsonResponse.message);
      return {
        success: false,
        message: "Failed to update the product",
      };
    }

    const { success, data } = jsonResponse;
    // console.log("The produce updated successfully: ", data)
    return { success, message: "Product updated successfully" };

  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    let jsonResponse;
    try {
      jsonResponse = await res.json();
    } catch (error) {
      console.error("Failed to parse JSON response:", error);
      return {
        success: false,
        message: "Error Occured while parsing the response.",
      };
    }

    const { success, message } = jsonResponse;

    if (!res.ok) {
      console.error("Error:", res.status, jsonResponse);
      return {
        success: false,
        message: message || "Failed to delete product",
      };
    }

    return { success: success, message: message };
  } catch (error) {
    console.error("Error deleting product:", error);
    return {
      success: false,
      message: error.message,
    };
  }
};
