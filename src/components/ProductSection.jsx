import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductSection() {
  return (
    <section id="products" className="py-20 px-10">
      <h1 className="text-5xl font-bold text-center mb-16">
        Trending Products
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;