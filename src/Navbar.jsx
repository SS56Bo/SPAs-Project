import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Programs from "./Programs";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
