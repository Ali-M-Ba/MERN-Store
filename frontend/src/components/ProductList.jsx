import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts, deleteProduct } from "../services/productService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              deleteJob={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center w-full gap-3">
          <p className="m-0">No products found.</p>
          <Link className="underline" to="/add-product">Create a new product</Link>
        </div>
      )}
    </>
  );
};

export default ProductList;
