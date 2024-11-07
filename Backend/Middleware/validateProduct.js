// validateProduct.js
export const validateProduct = (req, res, next) => {
    const { title, price, image } = req.body;
    
    if (!title || typeof price !== "number" || price <= 0 || !image) {
      return res.status(400).json({ success: false, message: "Invalid data type or missing fields" });
    }
  
    next();
  };
  