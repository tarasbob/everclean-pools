import Hero from "@/components/ui/Hero";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["(123) 456-7890", "24/7 Emergency Service"],
    action: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@evercleanpools.com", "Response within 24 hours"],
    action: "mailto:info@evercleanpools.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: ["Greater Metro Area", "25-mile radius"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8AM-6PM", "Sat-Sun: 9AM-4PM"],
  },
];

const faqs = [
  {
    question: "How quickly can you start service?",
    answer: "We can typically start service within 48-72 hours of your initial contact. Emergency services are available same-day.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation quotes for all our services. Simply fill out the form or give us a call.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, all major credit cards, and offer convenient auto-pay options for monthly services.",
  },
];

export default function Contact() {
  return (
    <>
      <Hero
        title="Get Your Free Pool Service Quote"
        subtitle="Contact EverClean Pools"
        description="Ready to enjoy a crystal-clear pool? Get in touch today for your free consultation and quote."
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-poppins font-bold text-charcoal mb-6">
                  Request Your Free Quote
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll contact you within 24 hours with a customized 
                  quote for your pool service needs.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-poppins font-bold text-charcoal mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-pool-blue/10 rounded-full flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-pool-blue" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal">{item.title}</h4>
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {item.action ? (
                              <a
                                href={item.action}
                                className="hover:text-pool-blue transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-pool-blue rounded-lg p-6 text-white">
                <h3 className="text-xl font-poppins font-bold mb-4">
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-1">{faq.question}</h4>
                      <p className="text-sm text-gray-100">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <MessageSquare className="h-8 w-8 text-pool-blue mb-4" />
                <p className="text-gray-700 italic mb-4">
                  "EverClean Pools transformed our green pool in just 2 days! Their emergency 
                  service saved our party. Highly recommended!"
                </p>
                <p className="font-semibold text-charcoal">Jennifer Martinez</p>
                <p className="text-sm text-gray-600">Maple Grove Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve the Greater Metro Area with reliable pool cleaning and maintenance services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-pool-blue mx-auto mb-4" />
                <p className="text-gray-600">Interactive map coming soon</p>
                <p className="text-sm text-gray-500 mt-2">
                  We service all areas within 25 miles of downtown
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <h4 className="font-semibold text-charcoal">North Side</h4>
                <p className="text-sm text-gray-600">Oakwood, Riverside</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-charcoal">South Side</h4>
                <p className="text-sm text-gray-600">Maple Grove, Sunset Ridge</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-charcoal">East Side</h4>
                <p className="text-sm text-gray-600">Pine Valley, Harbor View</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-charcoal">West Side</h4>
                <p className="text-sm text-gray-600">Mountain View, Lake District</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-deep-aqua">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Don't Wait - Your Perfect Pool is Just a Call Away
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join hundreds of satisfied customers enjoying crystal-clear pools year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-deep-aqua px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (123) 456-7890
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-200">
            Available 24/7 for emergencies • Free quotes • Same-day service available
          </p>
        </div>
      </section>
    </>
  );
} 