import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts, deleteProduct } from "../services/productService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(fetchProducts, 500);
    // fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("Invalid product ID.");
    }

    try {
      const { success, message } = await deleteProduct(id);
      if (success) {
        toast.success(message);
        setProducts((prev) => prev.filter((product) => product._id !== id));
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error("Error deleting product with ID:", id, error);
      toast.error(error.message);
    }
  };

  if (loading) return <Spinner loading={loading} />;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="product-list">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            deleteJob={handleDelete}
          />
        ))
      ) : (
        <div className="no-products">
          <p>No products found.</p>
          <Link to="/add-product">Create a new product</Link>
        </div>
      )}
    </div>
  );
};

export default ProductList;
