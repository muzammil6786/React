import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [notifications, setNotifications] = useState([
    "Welcome to Context API 🚀",
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn Context API", done: true },
    { id: 2, text: "Build Modern UI", done: false },
  ]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    setNotifications((prev) => [
      `${product.title} added to cart`,
      ...prev,
    ]);
  };

  const toggleFavorite = (product) => {
    const exists = favorites.find((item) => item.id === product.id);

    if (exists) {
      setFavorites((prev) =>
        prev.filter((item) => item.id !== product.id)
      );
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  const addTask = (text) => {
    if (!text.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        done: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      cart,
      favorites,
      notifications,
      tasks,
      addToCart,
      toggleFavorite,
      addTask,
      toggleTask,
      deleteTask,
    }),
    [theme, cart, favorites, notifications, tasks]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}