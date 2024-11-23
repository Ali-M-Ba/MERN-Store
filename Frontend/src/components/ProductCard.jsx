import { MdDelete } from "react-icons/md";
import { FaPenSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCard = ({ product, deleteJob }) => {
  const navigate = useNavigate();
  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      deleteJob(product._id);
      return navigate("/");
    }
  };

  return (
    <div key={product._id} className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-content">
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
        </div>
        <div className="btn-group">
          <Link to={`update-product/${product._id}`} className="btn btn-update">
            <FaPenSquare />
          </Link>
          <button className="btn btn-delete" onClick={handleDeleteClick}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
