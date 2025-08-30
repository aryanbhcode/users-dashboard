import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function CreateUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useLocalStorage("users", []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    company: "",
    phone: "",
    bio: "",
    gender: "",
    skills: [],
    profilePic: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        skills: checked
          ? [...form.skills, value]
          : form.skills.filter((s) => s !== value),
      });
    } else if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        setForm({ ...form, profilePic: URL.createObjectURL(file) });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...form, id: Date.now().toString() };
    setUsers([...users, newUser]);
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New User</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
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

      <input
        type="number"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="bio"
        placeholder="Short Bio"
        value={form.bio}
        onChange={handleChange}
      />

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
        <input
          type="file"
          name="profilePic"
          accept="image/*"
          onChange={handleChange}
        />
        {form.profilePic && (
          <img src={form.profilePic} alt="preview" className="preview" />
        )}
      </div>

      <button type="submit" className="btn">
        Save User
      </button>
    </form>
  );
}
