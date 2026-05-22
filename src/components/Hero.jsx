import { motion } from "framer-motion";
import BackgroundSlider from "./BackgroundSlider";

function Hero() {
  return (
    <section className="relative h-screen flex items-center px-10">
      <BackgroundSlider />

      <div className="z-10 max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6"
        >
          Future Electronics Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-300 text-lg mb-8"
        >
          Discover premium electronics with modern technology.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-cyan-500 px-8 py-3 rounded-full text-lg"
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;