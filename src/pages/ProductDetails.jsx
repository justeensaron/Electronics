import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="min-h-screen p-10 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt=""
          className="rounded-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="mt-6 text-gray-300">
            {product.description}
          </p>

          <h2 className="text-3xl text-cyan-400 mt-6">
            ${product.price}
          </h2>

          <button className="mt-8 bg-cyan-500 px-8 py-3 rounded-xl">
            Buy Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;