import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Gallary from "./pages/Gallary";
import Irrigation from "./pages/Irrigation";
import Polyhouse from "./pages/Polyhouse";
import Landscaping from "./pages/Landscaping";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import Contacts from "./pages/Contacts";
import DownloadBrochure from "./utils/DownloadBrochure";
import ContactIcons from "./utils/ContactIcons";

function App() {
  return (
    <Router>
      <Header />
      <DownloadBrochure />
      <ContactIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/contact" element={<Contacts />} />
        <Route path="/pages/gallery" element={<Gallary />} />
        <Route path="/pages/irrigation" element={<Irrigation />} />
        <Route path="/pages/polyhouse" element={<Polyhouse />} />
        <Route path="/pages/landscaping" element={<Landscaping />} />
        <Route path="/pages/projects" element={<Project />} />
        <Route path="/pages/services" element={<Services />} />
        <Route path="/pages/testimonials" element={<Testimonial />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
