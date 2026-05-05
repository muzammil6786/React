import "./Home.css";
import useUser from "../hooks/useUser";

const Home = () => {
  const { user, login } = useUser();

  return (
    <div className="home">
      <div className="card">
        <h1>Home Page</h1>

        {user ? (
          <h2 className="welcome">
            Welcome back, {user.name} 🎉
          </h2>
        ) : (
          <button
            className="login-btn"
            onClick={() => login("Muzammil")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;