import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Droplets, Calendar, Wrench, Beaker, CheckCircle, Star, Clock, Shield, Phone } from "lucide-react";

const detailedServices = [
  {
    id: "cleaning",
    icon: Droplets,
    title: "Pool Cleaning Services",
    description: "Keep your pool pristine with our comprehensive cleaning services",
    image: "/images/pool-cleaning.jpg",
    features: [
      "Weekly or bi-weekly cleaning schedules",
      "Surface skimming and debris removal",
      "Tile and grout cleaning",
      "Vacuum pool floor and walls",
      "Empty skimmer and pump baskets",
      "Brush pool walls and steps",
      "Backwash filter as needed",
      "Check and adjust water level"
    ],
    pricing: "Starting at $80/visit",
    popular: true,
  },
  {
    id: "maintenance",
    icon: Calendar,
    title: "Maintenance Plans",
    description: "Preventive care to extend your pool's life and save money",
    image: "/images/pool-maintenance.jpg",
    features: [
      "Customized maintenance schedules",
      "Regular equipment inspections",
      "Filter cleaning and maintenance",
      "Chemical level monitoring",
      "Equipment optimization",
      "Seasonal opening and closing",
      "Detailed service reports",
      "Priority emergency service"
    ],
    pricing: "From $150/month",
    popular: false,
  },
  {
    id: "repairs",
    icon: Wrench,
    title: "Repairs & Equipment",
    description: "Expert repair services to keep your pool running smoothly",
    image: "/images/pool-equipment.jpg",
    features: [
      "Pump and motor repairs",
      "Filter system repairs",
      "Heater diagnostics and repair",
      "Plumbing leak detection",
      "Automation system setup",
      "LED lighting installation",
      "Equipment upgrades",
      "24/7 emergency service"
    ],
    pricing: "Free estimates",
    popular: false,
  },
  {
    id: "chemical",
    icon: Beaker,
    title: "Chemical Balancing",
    description: "Professional water chemistry management for safe swimming",
    image: "/images/crystal-clear-pool.jpg",
    features: [
      "Weekly water testing",
      "pH and alkalinity balancing",
      "Chlorine/salt level optimization",
      "Algae prevention treatment",
      "Calcium hardness adjustment",
      "Stabilizer level management",
      "Shock treatments as needed",
      "Detailed chemistry reports"
    ],
    pricing: "Included in plans",
    popular: false,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "We assess your pool's needs and create a customized service plan."
  },
  {
    step: "2",
    title: "Scheduled Service",
    description: "Our certified technicians arrive on time for your scheduled service."
  },
  {
    step: "3",
    title: "Quality Service",
    description: "We perform thorough cleaning and maintenance with attention to detail."
  },
  {
    step: "4",
    title: "Service Report",
    description: "Receive detailed reports about your pool's condition and any recommendations."
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Professional Pool Services"
        subtitle="Comprehensive Pool Care Solutions"
        description="From routine cleaning to complex repairs, we provide all the services you need to keep your pool in perfect condition year-round."
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
        backgroundImage="/images/hero-pool.jpg"
        height="default"
      />

      {/* Services Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-charcoal mb-4">
              Our Pool Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional pool services designed to keep your pool clean, 
              safe, and enjoyable throughout the swimming season.
            </p>
          </div>

          <div className="space-y-20">
            {detailedServices.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    {service.popular && (
                      <div className="absolute -top-4 -right-4 z-10">
                        <div className="bg-pool-blue text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pool-blue/10 to-deep-aqua/10 flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-pool-blue" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-poppins font-bold text-charcoal">
                          {service.title}
                        </h3>
                        <p className="text-pool-blue font-semibold">{service.pricing}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-pool-blue flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button href="/contact" size="lg">
                        Get This Service
                      </Button>
                      <Button href="/contact" variant="outline" size="lg">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>

                <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-charcoal mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you receive the best pool care service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-pool-blue to-deep-aqua flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-br from-charcoal to-charcoal-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold mb-4">
              Why Choose EverClean Pools?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're not just another pool service company. We're your partners in maintaining a beautiful, healthy pool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 text-pool-blue" />
              <h3 className="text-xl font-poppins font-semibold mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-300">
                Fully certified professionals with comprehensive insurance for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-16 w-16 mx-auto mb-4 text-pool-blue" />
              <h3 className="text-xl font-poppins font-semibold mb-3">
                Always On Time
              </h3>
              <p className="text-gray-300">
                We respect your time with punctual service and efficient work practices.
              </p>
            </div>
            <div className="text-center">
              <Star className="h-16 w-16 mx-auto mb-4 text-pool-blue" />
              <h3 className="text-xl font-poppins font-semibold mb-3">
                5-Star Service
              </h3>
              <p className="text-gray-300">
                Consistently rated 5 stars by our customers for quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-pool-blue to-deep-aqua">
        <div className="container-custom text-center">
          <h2 className="font-poppins font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us create a custom pool care plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg" 
              className="bg-white text-pool-blue hover:bg-gray-100"
              showArrow
            >
              Get Free Quote
            </Button>
            <Button 
              href="tel:+1234567890" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-pool-blue"
            >
              <Phone className="h-5 w-5" />
              Call (123) 456-7890
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 