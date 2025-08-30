import { useParams } from "react-router-dom";
import "../styles/Profile.css";

export default function Profile() {
  const { id } = useParams();
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = savedUsers.find((u) => u.id === id);

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="profile">
      <img src={user.profilePic} alt={user.name} className="profile-pic" />
      <h2>{user.name}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Phone:</b> {user.phone}
      </p>
      <p>
        <b>Bio:</b> {user.bio}
      </p>
      <p>
        <b>Gender:</b> {user.gender}
      </p>
      <p>
        <b>Skills:</b> {user.skills.join(", ")}
      </p>
      <p>
        <b>City:</b> {user.city}
      </p>
      <p>
        <b>Company:</b> {user.company}
      </p>
    </div>
  );
}
