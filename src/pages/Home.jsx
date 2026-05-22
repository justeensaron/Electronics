import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;