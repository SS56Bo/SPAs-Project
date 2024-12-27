import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Programs from "./Programs";
import Landing from "./Landing";
import "./Navbar.css";
import Exams from "./Exams";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar-comp">
          <div className="logo">
            <Link to="/">
              <h2>ALLEN</h2>
            </Link>
          </div>
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/exams">Exams</Link>
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/exams" element={<Exams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
