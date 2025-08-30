import { Link } from "react-router-dom";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import UserCard from "../components/UserCard";
import "../styles/Home.css";

export default function Home() {
  const [users, setUsers] = useLocalStorage("users", []);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="home-header">
        <input
          type="text"
          placeholder="Search users..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/create" className="add-btn">
          + Add User
        </Link>
      </div>

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No users found.
          </p>
        )}
      </div>
    </div>
  );
}
