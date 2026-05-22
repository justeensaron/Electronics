import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-5"
    >
      <img
        src={product.image}
        alt=""
        className="h-56 w-full object-cover rounded-xl"
      />

      <h2 className="text-2xl mt-4">{product.name}</h2>

      <p className="text-cyan-400 text-xl mt-2">
        ${product.price}
      </p>

      <div className="flex gap-4 mt-4">
      <Link to="/cart">
  <button className="bg-cyan-500 px-4 py-2 rounded-lg">
    Add Cart
  </button>
</Link>

       <Link to={`/product/${product.id}`}>
  <button className="bg-pink-500 px-4 py-2 rounded-lg">
    Buy Now
  </button>
</Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;