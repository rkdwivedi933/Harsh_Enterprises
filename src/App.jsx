import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import FooterComponent from "./components/layout/FooterComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import SeedlingTray from "./pages/SeedlingTray";
import HipsRoll from "./pages/HipsRoll";
import Cocopit from "./pages/Cocopit";
import CavityTrayProduct from "./pages/CavityTrayListing";
import HIPSRollListing from "./pages/HIPSRollListing";
import CocopitListing from "./pages/CocopitListing";
import ScrollToTop from "./components/layout/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seedling-tray" element={<SeedlingTray/>} />
   
        <Route path="/hips-roll" element={<HipsRoll/>} />
        <Route path="/cocopit" element={<Cocopit/>} />
        <Route path="/tray-listing" element={<CavityTrayProduct/>} />
         <Route path="/hips-listing" element={<HIPSRollListing/>} />
         <Route path="/cocopit-listing" element={<CocopitListing/>} />
      </Routes>

      <FooterComponent />
    </Router>
  );
}

export default App;
