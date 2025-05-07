import Link from "next/link";
import { SideBar } from "./_components/sidebar";
import { TopNav } from "./_components/topnav";

export default function HomePage() {
  return (
    <div>
      <SideBar />
      <main className="mt-10 mr-50 ml-90 p-6 pt-40">
        <div id="About-Us" className="flex items-center justify-center">
          <img
            src="/SAN-AGUSTIN-removebg-preview.png"
            alt="Logo"
            className="mx-auto h-50 w-50"
          />
        </div>

        {/* About Us Section */}
        <div>
          <h1 className="text-center text-3xl font-bold">About Us</h1>
          <p id="Barangay-Officials" className="mt-6 text-center text-2xl">
            Barangay San Agustin is a well-established community known for its
            active participation in local development initiatives. It has a
            diverse residential population and includes multiple subdivisions
            and compounds. The barangay provides essential services to its
            constituents and often collaborates with government programs to
            improve the welfare of its residents. Community engagement,
            accessibility of public services, and neighborhood organization are
            key features of Barangay San Agustin.
          </p>
          <h1>dana karagul ni koko grabe</h1>
        </div>

        {/* Barangay Officials Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Barangay Officials
          </h2>

          {/* Captain Row */}
          <div className="mb-12 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-amber-500">
                <img
                  src="/officials/captain.jpg"
                  alt="Barangay Captain"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Juan Dela Cruz</h3>
              <p className="text-gray-600">Barangay Captain</p>
            </div>
          </div>

          {/* Kagawads Row */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
            {/* Kagawad 1 */}
            <div className="flex flex-col items-center">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-amber-500">
                <img
                  src="/officials/kagawad1.jpg"
                  alt="Kagawad"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Maria Santos</h3>
              <p className="text-gray-600">Kagawad - Peace and Order</p>
            </div>

            {/* Kagawad 2 */}
            <div className="flex flex-col items-center">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-amber-500">
                <img
                  src="/officials/kagawad2.jpg"
                  alt="Kagawad"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Pedro Reyes</h3>
              <p className="text-gray-600">Kagawad - Health</p>
            </div>

            {/* Kagawad 3 */}
            <div className="flex flex-col items-center">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-amber-500">
                <img
                  id="Privacy-Policy"
                  src="/officials/kagawad3.jpg"
                  alt="Kagawad"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Ana Lim</h3>
              <p className="text-gray-600">Kagawad - Education</p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Privacy Policy
          </h2>

          <div className="space-y-8 text-gray-700">
            {/* Information Collection Section */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-amber-700">
                Information We Collect
              </h3>
              <div className="space-y-2 pl-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="list-disc pl-6">
                  <li>Basic personal information</li>
                  <li>Contact details</li>
                  <li>Document request information</li>
                </ul>
              </div>
            </div>

            {/* Information Usage Section */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-amber-700">
                How We Use Your Information
              </h3>
              <div className="space-y-2 pl-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="list-disc pl-6">
                  <li>Processing document requests</li>
                  <li>Providing barangay services</li>
                  <li>Communication purposes</li>
                </ul>
              </div>
            </div>

            {/* Information Protection Section */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-amber-700">
                How We Protect Your Information
              </h3>
              <div className="pl-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* Your Rights Section */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-amber-700">
                Your Rights
              </h3>
              <div className="pl-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Right to access your information</li>
                  <li>Right to correct your information</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-amber-700">
                Contact Us
              </h3>
              <div className="pl-4">
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="mt-2 pl-4">
                  <p>Barangay San Agustin Office</p>
                  <p>Email: privacy@sanagustin.gov.ph</p>
                  <p>Phone: (123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div id="FAQs" className="mx-auto mt-20 max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold">FAQs</h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-amber-700">
                What documents can I request from the Barangay Office?
              </h3>
              <p className="text-gray-700">
                You can request various documents including:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-700">
                <li>Barangay Clearance</li>
                <li>Certificate of Residency</li>
                <li>Business Permit Recommendation</li>
                <li>Certificate of Indigency</li>
                <li>Barangay ID</li>
              </ul>
            </div>

            {/* FAQ Item 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-amber-700">
                What are the office hours of Barangay San Agustin?
              </h3>
              <p className="text-gray-700">
                The Barangay Office is open from Monday to Friday, 8:00 AM to
                5:00 PM. For emergencies, our Barangay Emergency Response Team
                is available 24/7.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-amber-700">
                How long does it take to process document requests?
              </h3>
              <p className="text-gray-700">
                Most document requests are processed within 1-2 working days.
                However, some special requests may take longer depending on the
                required verifications and approvals.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-amber-700">
                What requirements do I need to bring for document requests?
              </h3>
              <p className="text-gray-700">General requirements include:</p>
              <ul className="mt-2 list-disc pl-6 text-gray-700">
                <li>Valid ID</li>
                <li>Proof of Residency</li>
                <li>Recent Photo (for Barangay ID)</li>
                <li>Applicable fees</li>
              </ul>
            </div>

            {/* FAQ Item 5 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold text-amber-700">
                How can I report concerns in our barangay?
              </h3>
              <p className="text-gray-700">You can report concerns through:</p>
              <ul className="mt-2 list-disc pl-6 text-gray-700">
                <li>Visiting the Barangay Office</li>
                <li>Calling our hotline: (123) 456-7890</li>
                <li>Emailing us at: concerns@sanagustin.gov.ph</li>
                <li>Through our online request system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Location Footer Section */}
        <div className="mt-20 rounded-2xl bg-[#222] text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-9 py-12 sm:grid-cols-4">
            {/* Left Column - Logo & Motto */}
            <div className="text-center">
              <img
                src="/SAN-AGUSTIN-removebg-preview.png"
                alt="Barangay San Agustin Logo"
                className="mx-auto mb-4 h-20 justify-center"
              />
              <p className="text-sm text-yellow-400">
                “God-centered, honest, united, and committed to delivering
                inclusive, transparent, and compassionate public service.”
              </p>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="mb-4 text-lg font-semibold text-yellow-400">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#Announcements" className="hover:underline">
                    Announcements
                  </Link>
                </li>
                <li>
                  <Link href="#Request" className="hover:underline">
                    Request
                  </Link>
                </li>
                <li>
                  <Link href="#Contact-Us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column - Contact Info */}
            <div className="text-center sm:text-left">
              <h3 className="mb-4 text-lg font-semibold text-yellow-400">
                Contact Information
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="text-yellow-400">🏠</span>
                  <span>123 Barangay St., San Agustin, PH</span>
                </li>
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="text-yellow-400">📞</span>
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="text-yellow-400">📧</span>
                  <span>info@sanagustin.gov.ph</span>
                </li>
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="text-yellow-400">🕒</span>
                  <span>Mon–Fri: 8 AM – 5 PM</span>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="mb-4 text-lg font-semibold text-yellow-400">
                Our Map
              </h3>
              <img
                src="/MAP.png"
                alt="San Agustin Map"
                className="h-40 w-120"
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="rounded-2xl bg-black py-4 text-center text-sm text-gray-400">
            © 2025 Barangay San Agustin. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
}
