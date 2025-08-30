import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Form.css";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = savedUsers.find((u) => u.id === id);
    setForm(user);
  }, [id]);

  if (!form) return <p>User not found</p>;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((s) => s !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setForm((prev) => ({ ...prev, profilePic: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = savedUsers.map((u) => (u.id === id ? form : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Short bio"
        value={form.bio}
        onChange={handleChange}
      ></textarea>

      <div className="form-group">
        <label>Gender:</label>
        {["Male", "Female", "Other"].map((g) => (
          <label key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={form.gender === g}
              onChange={handleChange}
            />{" "}
            {g}
          </label>
        ))}
      </div>

      <div className="form-group">
        <label>Skills:</label>
        {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              value={skill}
              checked={form.skills.includes(skill)}
              onChange={handleChange}
            />{" "}
            {skill}
          </label>
        ))}
      </div>

      <div className="form-group">
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleImage} />
        {form.profilePic && (
          <img src={form.profilePic} alt="preview" className="preview" />
        )}
      </div>

      <button type="submit" className="btn">
        Update
      </button>
    </form>
  );
}
