import "./Navbar.css";
import useUser from "../hooks/useUser";

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <nav className="navbar">
      <div className="logo">ContextApp</div>

      {user && (
        <div className="nav-right">
          <span className="username">Hello, {user.name}</span>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;