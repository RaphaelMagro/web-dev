import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-6 mt-30 md:mx-20 lg:mx-40">
      <nav className="fixed top-0 right-0 left-0 z-50 mb-15 flex items-center justify-between bg-gray-900 p-4 text-white">
        <div className="flex items-center gap-6">
          <img
            src="/SAN-AGUSTIN-removebg-preview.png"
            alt="Logo"
            className="h-12 w-12 rounded-full bg-white p-1"
          />
          <h1 className="text-xl font-bold">Barangay San Agustin - Admin</h1>
        </div>
        <div className="flex gap-6">
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/request"}>Requests</Link>
          <Link href={"/documents"}>Documents</Link>
          <button className="text-red-500 hover:text-red-300">Logout</button>
        </div>
      </nav>

      {/* Main Dashboard Section */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-amber-600">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">
              Pending Request
            </h3>
            <p className="mt-4 text-3xl font-bold text-amber-600">3</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">
              Uploaded Documents
            </h3>
            <p className="mt-4 text-3xl font-bold text-amber-600">6</p>
          </div>
        </div>
      </section>

      {/* Latest Activity Section */}
      <div className="mt-10 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          🔔 Latest Activity
        </h2>
        <div className="text-gray-600">
          <p>🕒 No activity yet.</p>
          <p>Once residents interact with the site, activity appears.</p>
        </div>
      </div>

      {/* Quick Upload Section */}
      <section className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-amber-600">
          Quick Upload
        </h2>
        <div className="mx-auto w-full max-w-xl rounded-lg bg-gray-100 p-6 shadow-md">
          <form>
            <input
              type="text"
              placeholder="Title"
              className="mb-4 w-full rounded border p-3"
            />
            <textarea
              placeholder="Description (Optional)"
              className="mb-4 w-full rounded border p-3"
            ></textarea>
            <div className="mt-1 cursor-pointer rounded-md border-2 border-dashed border-gray-400 p-4 text-center">
              <label htmlFor="file-upload" className="cursor-pointer">
                <p>Upload Here</p>
                <input
                  id="file-upload"
                  type="file"
                  required
                  className="hidden"
                  accept="image/*,.pdf"
                />
              </label>
            </div>
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="rounded-md bg-yellow-400 px-8 py-2 font-semibold text-black hover:bg-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 w-full bg-gray-900 p-6 text-center text-sm text-white">
        © 2025 Barangay San Agustin - Admin Portal. All rights reserved.
      </footer>
    </main>
  );
}
