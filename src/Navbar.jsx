import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Programs from "./Programs";
import Landing from "./Landing";
import "./Navbar.css";
import Exams from "./Exams";
import SignInPage from "../components/SignIN";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div className="entire-bar">
          <div className="navbar-comp">
            <div className="logo">
              <Link to="/">
                <h1>ALLEN</h1>
              </Link>
            </div>
            <Link to="/">Home</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/exams">Exams</Link>
          </div>
          <Link to="signin">
            <button>Sign In</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
