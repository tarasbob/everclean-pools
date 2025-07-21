import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import { Award, Shield, Heart, Clock, Users, Star, CheckCircle, Sparkles, Trophy, Target } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Heart,
    title: "Passion for Perfection",
    description: "Every pool we service is treated with the same care and attention as if it were our own.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    description: "We respect your time. When we say we'll be there, you can count on it.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Fully licensed, insured, and committed to honest, transparent service.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We're not happy until you're thrilled.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

const certifications = [
  {
    icon: Award,
    title: "CPO® Certified",
    description: "Certified Pool/Spa Operator certification ensures expert knowledge in pool chemistry and safety.",
  },
  {
    icon: Trophy,
    title: "APSP Member",
    description: "Proud member of the Association of Pool & Spa Professionals, adhering to industry best practices.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed contractor with comprehensive liability insurance for your peace of mind.",
  },
  {
    icon: Star,
    title: "BBB Accredited",
    description: "A+ rating with the Better Business Bureau, demonstrating our commitment to customer satisfaction.",
  },
];

const milestones = [
  { year: "2009", event: "EverClean Pools founded with 5 residential clients" },
  { year: "2012", event: "Expanded to commercial pool services" },
  { year: "2015", event: "Reached 100+ satisfied customers" },
  { year: "2018", event: "Opened second service location" },
  { year: "2020", event: "Launched eco-friendly pool care line" },
  { year: "2024", event: "Serving 500+ pools across the metro area" },
];

export default function About() {
  return (
    <>
      <Hero
        title="Meet Ever, Your Pool Care Expert"
        subtitle="About EverClean Pools"
        description="Dedicated to making pool ownership enjoyable and stress-free since 2009."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        backgroundImage="/images/team-photo.jpg"
        height="tall"
      />

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-pool-blue to-deep-aqua">
        <div className="container-custom">
          <div className="text-center text-white">
            <Sparkles className="h-12 w-12 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-poppins font-bold mb-4">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              "To transform pool ownership from a chore into a joy by providing exceptional, 
              reliable service that gives our customers more time to create memories in their 
              perfect pool."
            </p>
          </div>
        </div>
      </section>

      {/* Ever's Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-right">
              <h2 className="font-poppins font-bold text-charcoal mb-8">
                Ever's Story: From Passion to Profession
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Hi, I'm Ever, founder and owner of EverClean Pools. What started as a summer job 
                  cleaning pools during college quickly turned into a passion for creating perfect 
                  aquatic environments.
                </p>
                <p>
                  After earning my CPO® certification and working with some of the area's leading 
                  pool service companies, I founded EverClean Pools in 2009 with a simple mission: 
                  provide exceptional pool care with a personal touch that big companies can't match.
                </p>
                <p>
                  Today, our team serves over 500 residential and commercial clients throughout the 
                  metro area. But no matter how much we grow, we never forget that behind every pool 
                  is a family looking to create memories, a business protecting its reputation, or a 
                  community bringing people together.
                </p>
                <p>
                  When I'm not ensuring your pool is crystal clear, you can find me volunteering with 
                  local swim programs, teaching water safety to children, and yes – enjoying my own 
                  backyard pool with my family!
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button href="/contact" size="lg" showArrow>
                  Let's Work Together
                </Button>
                <Button href="/testimonials" variant="outline" size="lg">
                  Read Success Stories
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pool-technician.jpg"
                  alt="Ever, owner of EverClean Pools"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-pool-blue to-deep-aqua text-white p-8 rounded-2xl shadow-xl animate-float">
                <p className="text-5xl font-poppins font-bold mb-2">15+</p>
                <p className="text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-charcoal mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming the area's most trusted pool service provider.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pool-blue to-deep-aqua"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-poppins font-bold text-pool-blue mb-2">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pool-blue rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
              <Target className="h-6 w-6 text-pool-blue" />
              <span className="text-pool-blue font-medium uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="font-poppins font-bold text-charcoal mb-4 animate-fade-in-up">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animate-delay-200">
              These principles guide everything we do, from the smallest residential pool to the 
              largest commercial property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full ${value.bgColor} group-hover:scale-110 transition-transform`}>
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-charcoal mb-4">
              Certified Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications and memberships reflect our commitment to industry-leading standards 
              and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-6 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pool-blue to-deep-aqua rounded-xl flex items-center justify-center text-white">
                  <cert.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-charcoal mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-deep-aqua to-pool-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='40'/%3E%3Ccircle cx='50' cy='50' r='30'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Ccircle cx='50' cy='50' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }} />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-white mb-4">
              The EverClean Team
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Every member of our team shares Ever's passion for pool perfection and commitment to 
              outstanding service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 hover:bg-white/20 transition-all animate-fade-in-up">
              <Users className="h-16 w-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-poppins font-semibold text-white mb-3">
                10+ Certified Technicians
              </h3>
              <p className="text-gray-200 text-lg">
                All team members are CPO® certified and undergo continuous training.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 hover:bg-white/20 transition-all animate-fade-in-up animate-delay-100">
              <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-poppins font-semibold text-white mb-3">
                Background Checked
              </h3>
              <p className="text-gray-200 text-lg">
                Every employee passes thorough background checks for your security.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 hover:bg-white/20 transition-all animate-fade-in-up animate-delay-200">
              <Heart className="h-16 w-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-poppins font-semibold text-white mb-3">
                Customer Focused
              </h3>
              <p className="text-gray-200 text-lg">
                Trained not just in pool care, but in exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-charcoal mb-6">
            Experience the EverClean Difference
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join our family of satisfied customers and see why EverClean Pools is the trusted 
            choice for pool care in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/testimonials" variant="outline" size="lg" showArrow>
              Read Customer Stories
            </Button>
            <Button href="/contact" size="lg" showArrow>
              Start Your Service
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 