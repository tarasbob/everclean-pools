import Link from "next/link";
import Button from "@/components/ui/Button";
import { Home, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pool-blue/10 to-deep-aqua/10">
      <div className="text-center px-4">
        <h1 className="text-9xl font-poppins font-bold text-pool-blue mb-4">404</h1>
        <h2 className="text-3xl font-poppins font-bold text-charcoal mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Looks like this page took a dive into the deep end. Let's get you back to crystal-clear waters!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button href="/" size="lg">
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            <Phone className="h-5 w-5 mr-2" />
            Contact Us
          </Button>
        </div>
        
        <div className="text-gray-600">
          <p className="mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services" className="text-pool-blue hover:text-deep-aqua transition-colors">
              Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/pricing" className="text-pool-blue hover:text-deep-aqua transition-colors">
              Pricing
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/about" className="text-pool-blue hover:text-deep-aqua transition-colors">
              About
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/gallery" className="text-pool-blue hover:text-deep-aqua transition-colors">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 