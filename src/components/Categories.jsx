import { motion } from "framer-motion";

const categories = [
  "Mobiles",
  "Laptops",
  "Gaming",
  "Headphones",
  "Cameras",
  "Smart Watches"
];

function Categories() {
  return (
    <section id="categories" className="py-20 px-10">
      <h1 className="text-5xl text-center font-bold mb-12">
        Categories
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-2xl text-center text-2xl"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Categories;