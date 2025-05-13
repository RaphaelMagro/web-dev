import Link from "next/link";

export default function RequestPage() {
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
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/request">Requests</Link>
          <Link href="/documents">Documents</Link>
          <button className="text-red-500 hover:text-red-300">Logout</button>
        </div>
      </nav>

      {/* Incoming Requests Section */}
      <section className="mt-20 mb-10">
        <h2 className="mb-6 text-center text-3xl font-bold text-amber-600">
          📥 Incoming Requests
        </h2>
        <div className="mx-auto h-80 w-full max-w-5xl rounded-lg bg-gray-100 p-8 shadow-md">
          <p className="text-gray-600">📭 No requests received yet.</p>
          <p className="text-gray-600">
            Once a resident submits a request, it will appear here.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <input
            type="text"
            placeholder="🔍 Search by name/type"
            className="w-full flex-grow rounded border p-3 md:w-auto"
          />
          <select className="w-full rounded border p-3 md:w-auto">
            <option value="">⬇ All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </section>

      {/* Footer */}
      <footer className="right-0 left-0 mt-20 w-full bg-gray-900 p-6 text-center text-sm text-white">
        © 2025 Barangay San Agustin - Admin Portal. All rights reserved.
      </footer>
    </main>
  );
}
