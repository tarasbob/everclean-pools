import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Shield, Award, Clock, Users, Droplets, Wrench, Beaker, Calendar, Star, CheckCircle, ArrowRight, Sparkles, Phone, Mail, MapPin } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Pool Cleaning",
    description: "Weekly or bi-weekly cleaning to keep your pool crystal clear and inviting.",
    features: ["Debris removal", "Surface skimming", "Tile cleaning"],
    image: "/images/pool-cleaning.jpg",
  },
  {
    icon: Calendar,
    title: "Maintenance Plans",
    description: "Customized maintenance schedules to fit your needs and budget.",
    features: ["Regular inspections", "Preventive care", "Flexible scheduling"],
    image: "/images/pool-maintenance.jpg",
  },
  {
    icon: Wrench,
    title: "Repairs & Equipment",
    description: "Expert repair services for pumps, filters, heaters, and more.",
    features: ["24/7 emergency", "OEM parts", "Warranty included"],
    image: "/images/pool-equipment.jpg",
  },
  {
    icon: Beaker,
    title: "Chemical Balancing",
    description: "Professional water testing and chemical balancing for safe swimming.",
    features: ["pH optimization", "Algae prevention", "Water clarity"],
    image: "/images/crystal-clear-pool.jpg",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "EverClean Pools has been maintaining our pool for 3 years. They're reliable, professional, and our pool has never looked better!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Mike Chen",
    role: "Property Manager",
    content: "Managing multiple properties means I need a pool service I can trust. EverClean delivers consistent quality every time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Lisa Rodriguez",
    role: "Hotel Owner",
    content: "Our guests always compliment how clean and inviting our pool is. Thank you EverClean for helping us maintain our reputation!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified professionals with comprehensive insurance coverage.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized for excellence in pool care and customer satisfaction.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    description: "We show up on time, every time, with consistent quality service.",
  },
  {
    icon: Users,
    title: "Family-Owned",
    description: "Local business with personal attention to every customer.",
  },
];

const galleryImages = [
  { src: "/images/hero-pool.jpg", alt: "Luxury pool with crystal clear water" },
  { src: "/images/luxury-pool.jpg", alt: "Beautiful backyard pool" },
  { src: "/images/crystal-clear-pool.jpg", alt: "Pristine swimming pool" },
  { src: "/images/pool-maintenance.jpg", alt: "Pool maintenance in action" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Crystal-Clear Pools Without the Hassle"
        subtitle="Professional Pool Cleaning & Maintenance"
        description="Let EverClean Pools handle your pool care while you enjoy the perfect swim. Professional, punctual, and personal service guaranteed."
        primaryCTA={{ text: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
        backgroundImage="/images/hero-pool.jpg"
        height="tall"
      />

      {/* Features Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 animate-fade-in-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-8 w-8 text-pool-blue flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold text-charcoal text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 hidden sm:block">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="section hero-gradient">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
              <Sparkles className="h-6 w-6 text-pool-blue" />
              <span className="text-pool-blue font-medium uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="font-poppins font-bold text-charcoal mb-4 animate-fade-in-up">
              Professional Pool Care Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animate-delay-200">
              From routine cleaning to complex repairs, we offer comprehensive pool care solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group animate-scale-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-2xl h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm group-hover:bg-pool-blue group-hover:text-white transition-all duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-b-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-poppins font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-pool-blue flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in animate-delay-500">
            <Button href="/services" size="lg" showArrow>
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-charcoal mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your pool into a sparkling oasis with our professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/gallery" variant="outline" showArrow>
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal to-charcoal-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='40'/%3E%3Ccircle cx='50' cy='50' r='30'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Ccircle cx='50' cy='50' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Happy Customers", suffix: "" },
              { value: "15", label: "Years Experience", suffix: "+" },
              { value: "4.9", label: "Average Rating", suffix: "★" },
              { value: "24/7", label: "Emergency Service", suffix: "" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-5xl md:text-6xl font-poppins font-bold text-white mb-2">
                  {stat.value}<span className="text-pool-blue">{stat.suffix}</span>
                </p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-pool-blue font-medium uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="font-poppins font-bold text-charcoal mb-4 animate-fade-in-up">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animate-delay-200">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card group hover:shadow-2xl animate-fade-in-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in animate-delay-500">
            <Button href="/testimonials" variant="outline" showArrow>
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-charcoal mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to experience the EverClean difference? Contact us today for a free quote and let us take care of your pool maintenance needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pool-blue/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-pool-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Call Us</p>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pool-blue/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-pool-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Email Us</p>
                    <p className="text-gray-600">info@evercleanpools.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pool-blue/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-pool-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Service Area</p>
                    <p className="text-gray-600">Greater Metro Area</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button href="/contact" size="lg" showArrow>
                  Request a Free Quote
                </Button>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/luxury-pool.jpg"
                alt="Luxury swimming pool"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-pool-blue to-deep-aqua relative overflow-hidden">
        {/* Animated background bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-float" />
          <div className="absolute top-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-float animate-delay-300" />
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full animate-float animate-delay-500" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-white mb-6 animate-fade-in-up">
            Ready for a Crystal-Clear Pool?
          </h2>
          <p className="text-xl text-gray-100 mb-10 animate-fade-in animate-delay-200">
            Get your free quote today and enjoy a hassle-free pool all season long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg" 
              className="bg-white text-pool-blue hover:bg-gray-100 shadow-xl"
              showArrow
            >
              Get Your Free Quote
            </Button>
            <Button 
              href="tel:+1234567890" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-pool-blue"
            >
              Call (123) 456-7890
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
