"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative w-28 h-28">
                <Image 
                  src="/logo.png" 
                  alt="Accredian Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors -ml-10">
                Accredian
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Minimal Design */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="#home"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#stats"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              Stats
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#clients"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              Clients
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#accredian-edge"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              Accredian Edge
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#cat"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              CAT
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#how-it-works"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#faqs"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              FAQs
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#testimonials"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 text-gray-700 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 my-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 bg-white border-t border-gray-200 space-y-1">
          <Link
            href="#home"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#stats"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Stats
          </Link>
          <Link
            href="#clients"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Clients
          </Link>
          <Link
            href="#accredian-edge"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Accredian Edge
          </Link>
          <Link
            href="#cat"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            CAT
          </Link>
          <Link
            href="#how-it-works"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#faqs"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="#testimonials"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface hover:text-accent transition-colors border-l-3 border-transparent hover:border-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
