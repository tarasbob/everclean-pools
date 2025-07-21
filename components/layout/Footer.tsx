import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Pool Cleaning", href: "/services#cleaning" },
  { name: "Maintenance Plans", href: "/services#maintenance" },
  { name: "Repairs & Equipment", href: "/services#repairs" },
  { name: "Chemical Balancing", href: "/services#chemical" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4 text-pool-blue">
              EverClean Pools
            </h3>
            <p className="text-gray-300 mb-4">
              Crystal-clear pools without the hassle – professional, punctual, and personal service.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Insured & Bonded</p>
              <p className="text-sm text-gray-300">CPO® Certified</p>
              <p className="text-sm text-gray-300">APSP Member</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-pool-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-pool-blue transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-pool-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">(123) 456-7890</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-pool-blue flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">info@evercleanpools.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pool-blue flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">Serving the Greater Metro Area</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-pool-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8AM-6PM</p>
                  <p className="text-gray-300">Sat-Sun: 9AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EverClean Pools. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-pool-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-pool-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 