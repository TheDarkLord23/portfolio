import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./sections/Home/Home";
import Alumni from "./sections/Alumni/Alumni";
import Tutor from "./sections/Tutor/Tutor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/tutor" element={<Tutor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
