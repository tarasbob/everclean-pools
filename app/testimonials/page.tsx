import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import { Star, Quote, PlayCircle } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Oakwood Heights",
    rating: 5,
    content: "EverClean Pools has been maintaining our pool for 3 years now, and I couldn't be happier. They're always on time, professional, and our pool has never looked better. Ever and his team truly care about their work!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    featured: true,
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Property Manager",
    location: "Riverside Apartments",
    rating: 5,
    content: "Managing multiple properties means I need a pool service I can trust. EverClean delivers consistent quality across all our locations. Their reporting system keeps me informed, and residents love the pristine pools.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Hotel Owner",
    location: "The Grand Vista Hotel",
    rating: 5,
    content: "Our guests always compliment how clean and inviting our pool is. EverClean's commercial service is top-notch - they understand the importance of maintaining our reputation and work around our schedule seamlessly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    featured: true,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "HOA President",
    location: "Sunset Ridge Community",
    rating: 5,
    content: "Finding a reliable pool service for our community pool was challenging until we found EverClean. They handle everything professionally, from maintenance to resident communications. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
  },
  {
    id: 5,
    name: "Jennifer Martinez",
    role: "Homeowner",
    location: "Maple Grove",
    rating: 5,
    content: "When we had a green pool emergency before a big party, Ever came to the rescue! They transformed our pool in just 2 days. Their emergency service saved our event, and now they're our regular maintenance team.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Gym Owner",
    location: "FitLife Fitness Center",
    rating: 5,
    content: "Our members expect a clean, safe pool environment. EverClean consistently delivers with their attention to detail and proactive maintenance approach. They catch issues before they become problems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "The Anderson Family",
    thumbnail: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?q=80&w=2070",
    duration: "2:34",
    title: "Why We Love EverClean Pools",
  },
  {
    id: 2,
    name: "Sunset Resort",
    thumbnail: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2070",
    duration: "3:15",
    title: "Commercial Pool Excellence",
  },
];

export default function Testimonials() {
  return (
    <>
      <Hero
        title="Hear From Our Happy Customers"
        subtitle="Testimonials & Reviews"
        description="Real stories from real customers who trust EverClean Pools with their pool care needs."
        primaryCTA={{ text: "Join Our Happy Customers", href: "/contact" }}
        backgroundImage="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
      />

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-poppins font-bold text-pool-blue">500+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-poppins font-bold text-pool-blue">4.9★</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-poppins font-bold text-pool-blue">98%</p>
              <p className="text-gray-600">Customer Retention</p>
            </div>
            <div>
              <p className="text-4xl font-poppins font-bold text-pool-blue">1000+</p>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              Featured Reviews
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our long-term customers have to say about their experience with EverClean Pools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.filter(t => t.featured).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-pool-blue/20" />
                <div className="flex items-start space-x-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-poppins font-semibold text-charcoal">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role} • {testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our customers share their EverClean Pools experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative group cursor-pointer">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{video.name}</p>
                    <p className="text-sm">{video.duration}</p>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-medium text-charcoal">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              More Customer Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">"{testimonial.content}"</p>
                <p className="text-xs text-gray-500 mt-3">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-aqua">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Experience the EverClean difference for yourself with our professional pool services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg" className="bg-white text-deep-aqua hover:bg-gray-100">
              Get Your Free Quote
            </Button>
            <Button href="/pricing" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-aqua">
              View Our Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 