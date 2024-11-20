import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/contact";
import Gallary from "./pages/Gallary";
import Irrigation from "./pages/Irrigation";
import Polyhouse from "./pages/Polyhouse";
import Landscaping from "./pages/Landscaping";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/contact" element={< Contact/>} />
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
