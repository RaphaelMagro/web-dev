import Image from "next/image";
import Footer from "../_components/footer";

export default function NextPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 pt-32">
      {/* Header Banner */}
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Send us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 p-3"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 p-3"
                  placeholder="juan@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-gray-300 p-3"
                  placeholder="How can we help?"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-md border border-gray-300 p-3"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-amber-600 px-6 py-3 text-white transition hover:bg-amber-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Office Information
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  Barangay Hall, San Agustin, City of San Fernando, Pampanga
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  (045) 123-4567
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  brgysanagustin@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  Monday to Friday, 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Location Map
              </h3>
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/MAP.png"
                  alt="Barangay Location Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
