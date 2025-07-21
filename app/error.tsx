"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pool-blue/10 to-deep-aqua/10 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>
        
        <h1 className="text-3xl font-poppins font-bold text-charcoal mb-4">
          Oops! Something Went Wrong
        </h1>
        
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Don't worry, our team has been notified 
          and is working to fix this issue.
        </p>

        {error.digest && (
          <p className="text-sm text-gray-500 mb-8 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="hover-scale"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            Try Again
          </Button>
          
          <Button
            href="/"
            variant="outline"
            size="lg"
            className="hover-scale"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Button>
        </div>

        <div className="mt-12 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Need immediate assistance?
          </p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center text-pool-blue font-medium hover:text-deep-aqua transition-colors"
          >
            <Phone className="h-4 w-4 mr-1" />
            Call us at (123) 456-7890
          </a>
        </div>
      </div>
    </div>
  );
} 