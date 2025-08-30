import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">User Dashboard</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Add User</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
