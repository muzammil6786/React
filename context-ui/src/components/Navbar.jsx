import { Sun, Moon, ShoppingCart, Heart } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const { theme, toggleTheme, cart, favorites } = useAppContext();

  return (
    <div className="p-5 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-3xl font-bold">
        Context API Store
      </h1>

      <div className="flex gap-4 items-center">
        <div className="bg-indigo-500 px-4 py-2 rounded-xl text-white flex gap-2">
          <ShoppingCart size={18} />
          {cart.length}
        </div>

        <div className="bg-pink-500 px-4 py-2 rounded-xl text-white flex gap-2">
          <Heart size={18} />
          {favorites.length}
        </div>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}