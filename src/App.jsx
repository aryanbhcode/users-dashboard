import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
