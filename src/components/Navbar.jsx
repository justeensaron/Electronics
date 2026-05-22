import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          ElectroMart
        </h1>

        <ul className="flex gap-8 text-lg">

          <Link to="/">
            <li className="hover:text-cyan-400 cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/products">
            <li className="hover:text-cyan-400 cursor-pointer">
              Products
            </li>
          </Link>

          <Link to="/about">
            <li className="hover:text-cyan-400 cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-cyan-400 cursor-pointer">
              Contact
            </li>
          </Link>

        </ul>

        <Link to="/cart">
          <FaShoppingCart
            size={24}
            className="hover:text-cyan-400"
          />
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;