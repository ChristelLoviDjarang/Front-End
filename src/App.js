import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot.jsx";
// import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
//import Clock from "./components/Clock.jsx"; // Mengimpor komponen Clock yang telah dibuat

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          {/* Menggunakan komponen Clock di dalam route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<Chatbot />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/clock" element={<Clock />} />{" "} */}
            {/* Menambah route untuk Clock */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
