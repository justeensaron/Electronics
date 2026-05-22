import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";

function Products() {
  return (
    <div>
      <Navbar />

      <div className="pt-28">
        <ProductSection />
      </div>
    </div>
  );
}

export default Products;