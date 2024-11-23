import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { getProduct } from "../services/productService";
import { useParams } from "react-router-dom";

const UpdateProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <main>
      <section className="section">
        <ProductForm isAdding={false} existingProduct={product} />
      </section>
    </main>
  );
};

export default UpdateProductPage;
