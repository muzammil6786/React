import { Heart } from "lucide-react";
import { productsData } from "../data/products";
import { useAppContext } from "../context/AppContext";

export default function ProductsSection() {
  const {
    addToCart,
    toggleFavorite,
    favorites,
    theme,
  } = useAppContext();

  return (
    <section className="w-full fade-in flex flex-col items-center">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text">
          Featured Products
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          Modern compact product cards
        </p>
      </div>

      {/* CENTER GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {productsData.map((product) => {
          const liked = favorites.find(
            (item) => item.id === product.id
          );

          return (
            <div
              key={product.id}
              className={`card ${
                theme === "dark"
                  ? "glass bg-zinc-900/70"
                  : "bg-white"
              }`}
            >
              {/* IMAGE */}
              <div className="p-3 flex justify-center">
                <div className="relative w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />

                  {/* FAVORITE */}
                  <button
                    onClick={() =>
                      toggleFavorite(product)
                    }
                    className={`absolute top-2 right-2 p-2 rounded-full ${
                      liked
                        ? "bg-pink-500 text-white"
                        : "bg-black/40 text-white"
                    }`}
                  >
                    <Heart size={14} />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-4 pb-5 text-center">
                <h3 className="text-lg font-semibold">
                  {product.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Premium modern gadget
                </p>

                <div className="mt-3 text-indigo-400 font-bold text-lg">
                  ₹{product.price}
                </div>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    addToCart(product)
                  }
                  className="primary-btn w-full mt-4 py-2.5 rounded-xl text-sm font-medium"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}