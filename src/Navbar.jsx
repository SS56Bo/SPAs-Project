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
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/programs">
            <button>Programs</button>
          </Link>
          <Link to="/exams">
            <button>Exams</button>
          </Link>
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
