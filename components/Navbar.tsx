"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Accredian
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#solutions"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#domains"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Domains
            </Link>
            <Link
              href="#approach"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Approach
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="#solutions"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#domains"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Domains
            </Link>
            <Link
              href="#approach"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Approach
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
