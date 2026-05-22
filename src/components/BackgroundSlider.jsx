import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1518770660439-4636190af475"
];

function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{ x: ["0%", "-10%"] }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="absolute right-0 top-0 w-1/2 h-screen overflow-hidden"
    >
      <img
        src={images[index]}
        alt=""
        className="w-full h-full object-cover opacity-40"
      />
    </motion.div>
  );
}

export default BackgroundSlider;