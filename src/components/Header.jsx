import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/icon 2.png"; // Assuming the image is in `assets/images`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu state
  };

  const handleLinkClick = (path) => {
    setIsOpen(false); // Close the menu immediately
    navigate(path); // Navigate to the route
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to home
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/pages/about" },
    { name: "Services", path: "/pages/services" },
    { name: "Projects", path: "/pages/projects" },
    { name: "Gallery", path: "/pages/gallery" },
    { name: "Testimonials", path: "/pages/testimonials" },
    { name: "Contact Us", path: "/pages/contact" },
  ];

  return (
    <header
      className="w-full flex justify-between items-center px-7 py-3"
      style={{ background: "#B5651D", zIndex: 10, position: "relative" }}
    >
      {/* Logo */}
      <div onClick={handleLogoClick} className="cursor-pointer">
        <img src={logo} alt="logo" width={72} height={72} />
      </div>

      {/* Hamburger Button (Visible on small screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links (Hidden on small screens) */}
      <ul className="hidden md:flex md:flex-row gap-8 text-white items-center">
        {links.map(({ name, path }) => (
          <li
            key={name}
            onClick={() => handleLinkClick(path)}
            className={`cursor-pointer ${
              location.pathname === path ? "border-b-2 border-white" : ""
            } hover:border-b-2 hover:border-white`}
          >
            {name}
          </li>
        ))}
      </ul>

      {/* Mobile Menu (Visible when isOpen is true) */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } z-50 flex-col absolute top-24 left-0 w-full bg-[#B5651D] text-white items-center md:hidden gap-4 py-6`}
      >
        {links.map(({ name, path }) => (
          <li
            key={name}
            onClick={() => handleLinkClick(path)}
            className={`cursor-pointer ${
              location.pathname === path ? "border-b-2 border-white" : ""
            } hover:border-b-2 hover:border-white`}
          >
            {name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;