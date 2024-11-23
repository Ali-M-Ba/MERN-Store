import { Link } from "react-router-dom";
import { IoMdHome, IoMdAddCircle } from "react-icons/io";

const Navigation = () => {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <Link to="/" className="nav-link" aria-current="page">
          <IoMdHome />
        </Link>
        <Link to="/add-product" className="nav-link">
          <IoMdAddCircle />
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
