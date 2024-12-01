import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct, updateProduct } from "../services/productService";
import { IoMdAddCircle } from "react-icons/io";
import { FaPenSquare } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductForm = ({ isAdding = true, existingProduct = null }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct);
    }
  }, [existingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((previousValues) => {
      return {
        ...previousValues,
        [name]: name === "price" ? parseInt(value) || 0 : value,
      };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.image) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const { success, message } = isAdding
        ? await addProduct(product)
        : await updateProduct(product._id, product);

      success ? toast.success(message) : toast.error(message);
      navigate("/");
    } catch (error) {
      console.error("An error ocuurred while submitting the form: ", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={submitForm}
      method={isAdding ? "POST" : "PUT"}
      className="bg-secondary p-6 m-auto rounded-md w-full max-w-xl"
    >
      <fieldset>
        <legend className="font-bold text-xl mb-4">
          {isAdding ? "Add " : "Update"} a Product
        </legend>

        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="product-name">
            Product Name
          </label>
          <input
            className="w-full py-1 px-2 rounded-sm focus:outline-none text-primary"
            type="text"
            id="product-name"
            name="name"
            placeholder="Product Name"
            required
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="product-price">
            Product Price
          </label>
          <input
            className="w-full py-1 px-2 rounded-sm focus:outline-none text-primary"
            type="number"
            id="product-price"
            name="price"
            placeholder="Product Price"
            required
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="product-image">
            Product Image URL
          </label>
          <input
            className="w-full py-1 px-2 rounded-sm focus:outline-none text-primary"
            type="url"
            id="product-image"
            name="image"
            placeholder="Product Image URL"
            required
            value={product.image}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 text-center rounded-md bg-quaternary text-primary hover:bg-tertiary"
        >
          {isAdding ? <IoMdAddCircle /> : <FaPenSquare />}
        </button>
      </fieldset>
    </form>
  );
};

export default ProductForm;
