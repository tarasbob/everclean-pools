import Hero from "@/components/ui/Hero";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="Learn how EverClean Pools collects, uses, and protects your personal information."
        backgroundImage="https://images.unsplash.com/photo-1601545112498-95055bfd06fe?q=80&w=2070"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you request a quote, 
              schedule a service, or contact us. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Pool information and service preferences</li>
              <li>Payment information</li>
              <li>Communication history and service records</li>
            </ul>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide and maintain our pool services</li>
              <li>Process payments and send service reminders</li>
              <li>Communicate with you about your service</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may 
              share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to improve your experience on our 
              website. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the effective date.
            </p>

            <h2 className="text-2xl font-poppins font-bold text-charcoal mt-8 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                <strong>EverClean Pools</strong><br />
                Email: privacy@evercleanpools.com<br />
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