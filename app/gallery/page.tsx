"use client";

import { useState } from "react";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Droplets, Sparkles, Camera, Award } from "lucide-react";

const beforeAfterProjects = [
  {
    id: 1,
    title: "Complete Pool Restoration",
    description: "Transformed a neglected pool into a crystal-clear oasis",
    before: "/images/pool-maintenance.jpg",
    after: "/images/crystal-clear-pool.jpg",
    timeframe: "3 days",
    services: ["Deep cleaning", "Algae removal", "Chemical balancing", "Equipment repair"],
  },
  {
    id: 2,
    title: "Green to Clean Transformation",
    description: "Severe algae problem solved with expert treatment",
    before: "/images/pool-equipment.jpg",
    after: "/images/luxury-pool.jpg",
    timeframe: "1 week",
    services: ["Shock treatment", "Algae removal", "Filter cleaning", "Water chemistry"],
  },
  {
    id: 3,
    title: "Commercial Property Upgrade",
    description: "Hotel pool maintenance and equipment modernization",
    before: "/images/pool-cleaning.jpg",
    after: "/images/hero-pool.jpg",
    timeframe: "2 weeks",
    services: ["Equipment upgrade", "Tile repair", "Resurfacing", "Automation setup"],
  },
];

const galleryImages = [
  {
    id: 1,
    url: "/images/gallery-1.jpg",
    caption: "Residential pool with perfect water clarity",
    category: "Residential",
  },
  {
    id: 2,
    url: "/images/gallery-2.jpg",
    caption: "Luxury resort pool maintenance",
    category: "Commercial",
  },
  {
    id: 3,
    url: "/images/gallery-3.jpg",
    caption: "Community pool ready for summer",
    category: "Community",
  },
  {
    id: 4,
    url: "/images/crystal-clear-pool.jpg",
    caption: "Crystal clear infinity pool",
    category: "Residential",
  },
  {
    id: 5,
    url: "/images/luxury-pool.jpg",
    caption: "Modern pool with LED lighting",
    category: "Residential",
  },
  {
    id: 6,
    url: "/images/gallery-4.jpg",
    caption: "Spa and pool combination",
    category: "Commercial",
  },
  {
    id: 7,
    url: "/images/hero-pool.jpg",
    caption: "Pristine backyard pool",
    category: "Residential",
  },
  {
    id: 8,
    url: "/images/pool-cleaning.jpg",
    caption: "Professional cleaning in action",
    category: "Service",
  },
  {
    id: 9,
    url: "/images/pool-maintenance.jpg",
    caption: "Regular maintenance service",
    category: "Service",
  },
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const categories = ["All", "Residential", "Commercial", "Community", "Service"];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % beforeAfterProjects.length);
    setShowBefore(true);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
    setShowBefore(true);
  };

  return (
    <>
      <Hero
        title="Our Work Speaks for Itself"
        subtitle="Gallery & Transformations"
        description="See the EverClean difference through our portfolio of stunning pool transformations and maintenance results."
        primaryCTA={{ text: "Get Your Transformation", href: "/contact" }}
        backgroundImage="/images/gallery-1.jpg"
        height="tall"
      />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-pool-blue to-deep-aqua">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in-up">
              <Droplets className="h-12 w-12 mx-auto mb-3 text-white/80" />
              <p className="text-4xl font-bold mb-1">500+</p>
              <p className="text-white/80">Pools Transformed</p>
            </div>
            <div className="animate-fade-in-up animate-delay-100">
              <Sparkles className="h-12 w-12 mx-auto mb-3 text-white/80" />
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-white/80">Satisfaction Rate</p>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <Camera className="h-12 w-12 mx-auto mb-3 text-white/80" />
              <p className="text-4xl font-bold mb-1">1000+</p>
              <p className="text-white/80">Photos Captured</p>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <Award className="h-12 w-12 mx-auto mb-3 text-white/80" />
              <p className="text-4xl font-bold mb-1">5★</p>
              <p className="text-white/80">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
              <Sparkles className="h-6 w-6 text-pool-blue" />
              <span className="text-pool-blue font-medium uppercase tracking-wider">Transformations</span>
            </div>
            <h2 className="font-poppins font-bold text-charcoal mb-4 animate-fade-in-up">
              Amazing Before & After Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animate-delay-200">
              From green to pristine, see how we restore pools to their full potential.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-poppins font-semibold text-charcoal mb-2">
                  {beforeAfterProjects[selectedProject].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {beforeAfterProjects[selectedProject].description}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="bg-gradient-to-r from-pool-blue to-deep-aqua text-white px-4 py-2 rounded-full font-medium">
                    Completed in {beforeAfterProjects[selectedProject].timeframe}
                  </span>
                  {beforeAfterProjects[selectedProject].services.map((service, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                {showBefore ? (
                  <>
                    <Image
                      src={beforeAfterProjects[selectedProject].before}
                      alt={`${beforeAfterProjects[selectedProject].title} - Before`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                      BEFORE
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={beforeAfterProjects[selectedProject].after}
                      alt={`${beforeAfterProjects[selectedProject].title} - After`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                      AFTER
                    </div>
                  </>
                )}
                
                {/* Toggle Button */}
                <button
                  onClick={() => setShowBefore(!showBefore)}
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-charcoal hover:bg-white transition-all hover:scale-105 shadow-xl z-20"
                >
                  {showBefore ? "👀 See After" : "👀 See Before"}
                </button>
              </div>

              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={prevProject}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:scale-110"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <div className="flex gap-2">
                  {beforeAfterProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedProject(index);
                        setShowBefore(true);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === selectedProject
                          ? "w-8 bg-pool-blue"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextProject}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:scale-110"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-charcoal mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Browse through our collection of perfectly maintained pools across residential and 
              commercial properties.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pool-blue to-deep-aqua text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={image.url}
                  alt={image.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg mb-1">{image.caption}</p>
                    <p className="text-gray-200 text-sm">{image.category}</p>
                  </div>
                </div>
                {hoveredImage === image.id && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 animate-fade-in">
                    <Camera className="h-5 w-5 text-pool-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pool-blue via-deep-aqua to-pool-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6 animate-fade-in-up">
            Ready for Your Pool Transformation?
          </h2>
          <p className="text-xl text-gray-100 mb-10 animate-fade-in animate-delay-200">
            Let us show you what your pool could look like with EverClean's expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-pool-blue hover:bg-gray-100 shadow-xl">
              Get Your Free Quote
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pool-blue">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 