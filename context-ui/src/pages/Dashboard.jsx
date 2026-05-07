import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import TodoSection from "../components/TodoSection";
import NotificationsSection from "../components/NotificationsSection";
import { useAppContext } from "../context/AppContext";

export default function Dashboard() {
  const { theme } = useAppContext();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-zinc-950 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <HeroSection />
          <ProductsSection />
        </div>

        <div className="space-y-6">
          <TodoSection />
          <NotificationsSection />
        </div>
      </div>
    </div>
  );
}