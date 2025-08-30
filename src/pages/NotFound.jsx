import { Link } from "react-router-dom";
import "../styles/Profile.css";

export default function NotFound() {
  return (
    <div className="profile">
      <h2>404 - Page Not Found</h2>
      <p>The page or user you are looking for does not exist.</p>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </div>
  );
}
