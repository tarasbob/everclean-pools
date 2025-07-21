import Hero from "@/components/ui/Hero";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Service Agreement"
        description="Please read these terms carefully before using EverClean Pools services."
        backgroundImage="https://images.unsplash.com/photo-1601545349231-3265be268fa6?q=80&w=2071"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024
            </p>

            <p className="text-gray-700 mb-6">
              These Terms of Service ("Terms") govern your use of EverClean Pools services. 
              By using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              1. Services
            </h2>
            <p className="text-gray-700 mb-6">
              EverClean Pools provides pool cleaning, maintenance, repair, and related services 
              as described in your service agreement. Specific services, schedules, and pricing 
              are outlined in your individual service contract.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              2. Service Agreements
            </h2>
            <p className="text-gray-700 mb-4">
              All services are subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Acceptance of your service request</li>
              <li>Verification of service area eligibility</li>
              <li>Execution of a service agreement</li>
              <li>Payment terms as specified in your contract</li>
            </ul>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              3. Customer Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              As our customer, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide safe and clear access to the pool area</li>
              <li>Ensure pets are secured during service visits</li>
              <li>Maintain adequate water levels in your pool</li>
              <li>Notify us of any equipment issues or concerns promptly</li>
              <li>Make timely payments according to agreed terms</li>
            </ul>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              4. Payment Terms
            </h2>
            <p className="text-gray-700 mb-6">
              Payment is due according to the terms specified in your service agreement. Late 
              payments may result in service suspension and additional fees. We accept cash, 
              check, credit cards, and automated payments.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              5. Service Guarantees and Limitations
            </h2>
            <p className="text-gray-700 mb-6">
              We strive to provide excellent service but cannot guarantee specific results due 
              to factors beyond our control. Our liability is limited to the cost of services 
              provided. We are not responsible for pre-existing conditions, acts of nature, or 
              damage resulting from equipment failure not caused by our negligence.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              6. Cancellation Policy
            </h2>
            <p className="text-gray-700 mb-4">
              Service cancellations are subject to the following terms:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Monthly services: 30 days written notice required</li>
              <li>One-time services: 48 hours notice required</li>
              <li>Emergency services: Non-refundable once technician is dispatched</li>
            </ul>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              7. Insurance and Liability
            </h2>
            <p className="text-gray-700 mb-6">
              EverClean Pools maintains comprehensive general liability insurance. We are fully 
              licensed and bonded. Any claims must be reported within 48 hours of service.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              8. Weather and Access
            </h2>
            <p className="text-gray-700 mb-6">
              Services may be rescheduled due to inclement weather or inability to access the 
              pool area. We will make reasonable efforts to notify you of any schedule changes.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              9. Chemical Use and Safety
            </h2>
            <p className="text-gray-700 mb-6">
              We use industry-standard pool chemicals in accordance with manufacturer guidelines. 
              Customers should wait the recommended time before swimming after chemical treatment. 
              We are not liable for adverse reactions to properly applied chemicals.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              10. Dispute Resolution
            </h2>
            <p className="text-gray-700 mb-6">
              Any disputes will first be addressed through good faith negotiation. If resolution 
              cannot be reached, disputes will be settled through binding arbitration in accordance 
              with local laws.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              11. Modifications
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              upon posting to our website. Continued use of our services constitutes acceptance 
              of modified Terms.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-700 mb-6">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                <strong>EverClean Pools</strong><br />
                Email: legal@evercleanpools.com<br />
                Phone: (123) 456-7890<br />
                Address: 123 Main Street, Metro City, ST 12345
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="text-pool-blue hover:text-deep-aqua font-medium">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 