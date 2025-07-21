"use client";

import Button from "./Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
  height?: "default" | "tall" | "full";
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = true,
  height = "default",
}: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heightClasses = {
    default: "min-h-[700px]",
    tall: "min-h-[800px]",
    full: "min-h-screen",
  };

  return (
    <section 
      className={`relative ${heightClasses[height]} flex items-center overflow-hidden`} 
      role="banner"
    >
      {/* Background Image with parallax effect */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-pool-blue/20 to-deep-aqua/20 animate-pulse" />
            )}
            <Image
              src={backgroundImage}
              alt=""
              fill
              className={`object-cover transition-opacity duration-1000 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              priority
              onLoad={() => setImageLoaded(true)}
              sizes="100vw"
              quality={90}
            />
          </div>
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-transparent z-10" />
          )}
        </>
      )}
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-5 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(24, 185, 232, 0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(1, 116, 127, 0.4) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container-custom py-24">
        <div className="max-w-3xl">
          {subtitle && (
            <div className="flex items-center gap-2 mb-6 animate-fade-in-down">
              <Sparkles className="h-5 w-5 text-pool-blue animate-pulse" />
              <p className="text-pool-blue font-medium text-lg tracking-wide uppercase">
                {subtitle}
              </p>
            </div>
          )}
          
          <h1 className="font-poppins font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-100 mb-10 leading-relaxed animate-fade-in animate-delay-300 max-w-2xl">
              {description}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-500">
              {primaryCTA && (
                <Button 
                  href={primaryCTA.href} 
                  size="lg" 
                  className="group shadow-xl hover:shadow-2xl bg-pool-blue text-white hover:bg-pool-blue-600"
                >
                  <span className="relative z-10">{primaryCTA.text}</span>
                </Button>
              )}
              {secondaryCTA && (
                <Button 
                  href={secondaryCTA.href} 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-charcoal"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
      
      {/* Decorative wave with gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f8f9fa" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0 60L48 55C96 50 192 40 288 43.3C384 46.7 480 63.3 576 71.7C672 80 768 80 864 71.7C960 63.3 1056 46.7 1152 43.3C1248 40 1344 50 1392 55L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="url(#wave-gradient)"
          />
        </svg>
      </div>
    </section>
  );
} 