import React from "react";
import { Link } from "react-router-dom";

const MobileNavbar = ({ links, isMenuOpen, closeMenu, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-3">
        {isMenuOpen ? (
          // Close icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <div className="absolute z-10 top-16 right-0 left-0 w-full h-full p-4 text-center">
          {/* Mobile menu items */}
          {links.map((link) => {
            const { name, url } = link;
            return (
              <Link
                to={url}
                className="block text-lg font-semibold p-8 bg-white text-gray-800 hover:bg-blue-100"
                onClick={closeMenu}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
