// validateProduct.js
export const validateProduct = (req, res, next) => {
  // console.log("Incoming data:", req.body);
  const { name, price, image } = req.body;

  if (!name || typeof price !== "number" || price <= 0 || !image) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid data type or missing fields" });
  }

  next();
};
