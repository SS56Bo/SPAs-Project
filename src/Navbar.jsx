import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Programs from "./Programs";
import Landing from "./Landing";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar-comp">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/exams">Exams</Link>
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
