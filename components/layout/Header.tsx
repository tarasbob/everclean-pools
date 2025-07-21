"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Droplets } from "lucide-react";
import Button from "../ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass shadow-lg border-b border-white/10" 
          : "bg-white/95 shadow-sm backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Droplets className="h-8 w-8 text-pool-blue group-hover:rotate-180 transition-all duration-500" />
              <span className="text-2xl font-poppins font-bold">
                <span className="text-charcoal">Ever</span>
                <span className="gradient-text">Clean</span>
                <span className="text-charcoal"> Pools</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-pool-blue transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pool-blue to-deep-aqua group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
          
          {/* Right side - Phone and CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center space-x-2 text-charcoal hover:text-pool-blue transition-all duration-300 group"
              aria-label="Call us at (123) 456-7890"
            >
              <Phone className="h-4 w-4 group-hover:animate-bounce" />
              <span className="text-sm font-medium">(123) 456-7890</span>
            </a>
            
            <Button
              href="/contact"
              size="sm"
              className="hidden sm:inline-flex shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
            </Button>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden rounded-lg p-2 text-charcoal hover:bg-pool-blue/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 top-[73px] glass transition-all duration-500 ${
            mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="p-6 space-y-2 h-full overflow-y-auto">
            {navigation.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 text-base font-medium text-charcoal hover:bg-pool-blue/10 hover:text-pool-blue rounded-lg transition-all duration-300 ${
                  mobileMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 mt-6 border-t border-gray-200/20 space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 px-4 py-3 text-base font-medium text-charcoal hover:bg-pool-blue/10 hover:text-pool-blue rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>(123) 456-7890</span>
              </a>
              <div className="px-4">
                <Button
                  href="/contact"
                  fullWidth
                  size="lg"
                  className="shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 