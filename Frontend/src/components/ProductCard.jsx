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
    <div
      key={product._id}
      className="flex flex-col items-center justify-between bg-secondary rounded-md transition-transform transform hover:-translate-y-1.5"
    >
      <img className="rounded-t-md h-56 w-full  object-cover" src={product.image} alt={product.name} />
      <div className="w-full">
        <div className="p-4">
          <h3 className="text-lg font-bold font">{product.name}</h3>
          <p>${product.price}</p>
        </div>
        <div className="flex gap-3 pb-4 px-4">
          <Link to={`update-product/${product._id}`} className="py-2 px-4 text-center rounded-md bg-warning hover:bg-warning-dark text-white">
            <FaPenSquare />
          </Link>
          <button className="py-2 px-4 text-center rounded-md bg-danger hover:bg-danger-light text-white" onClick={handleDeleteClick}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
