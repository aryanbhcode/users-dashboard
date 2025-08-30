import { Link } from "react-router-dom";
import "../styles/UserCard.css";

export default function UserCard({ user, onDelete }) {
  return (
    <div className="user-card">
      <img src={user.profilePic} alt={user.name} className="profile-pic" />
      <h3>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h3>
      <p>{user.email}</p>
      <p>{user.bio}</p>
      <div className="card-actions">
        <Link to={`/edit/${user.id}`} className="btn">
          Edit
        </Link>
        <button className="btn danger" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
