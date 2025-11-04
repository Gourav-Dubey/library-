import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-darkBg text-lightText min-h-screen flex flex-col">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/facilities" element={<Facilities />} />
         
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
