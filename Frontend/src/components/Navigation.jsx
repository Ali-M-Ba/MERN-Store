import { Link } from "react-router-dom";
import { IoMdHome, IoMdAddCircle } from "react-icons/io";

const Navigation = () => {
  return (
    <header className="bg-secondary p-4">
      <nav className="flex justify-between max-w-7xl m-auto" aria-label="Main Navigation">
        <Link to="/" className="px-4 py-2 rounded-md bg-quaternary hover:bg-tertiary text-primary" aria-current="page">
          <IoMdHome />
        </Link>
        <Link to="/add-product" className="px-4 py-2 rounded-md bg-quaternary hover:bg-tertiary text-primary">
          <IoMdAddCircle />
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
