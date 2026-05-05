// src/App.js
import UserProvider from "./context/UserProvider";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Home />
    </UserProvider>
  );
}

export default App;