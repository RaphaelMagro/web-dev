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
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/request"}>Requests</Link>
          <Link href={"/documents"}>Documents</Link>
          <button className="text-red-500 hover:text-red-300">Logout</button>
        </div>
      </nav>
      {/* Pending Requests Section */}
      <section className="mb-10">
        <h2 className="mb-6 text-center text-3xl font-bold text-amber-600">
          Pending Requests
        </h2>
        <div className="mx-auto w-full max-w-xl rounded-lg bg-gray-100 p-10 shadow-md">
          <div className="rounded-lg bg-amber-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Pending Requests
            </h3>
            <p className="mt-4 text-4xl font-bold text-amber-700">0</p>
            <p className="text-gray-600">No pending requests at the moment.</p>
          </div>
        </div>
      </section>

      {/* New Request Form Section */}
      <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          📝 Submit a New Request
        </h2>
        <form>
          <input
            type="text"
            placeholder="Request Title"
            className="mb-4 w-full rounded border p-2"
          />
          <textarea
            placeholder="Description"
            className="mb-4 w-full rounded border p-2"
          ></textarea>
          <select className="mb-4 w-full rounded border p-2">
            <option value="">Select Request Type</option>
            <option value="certificate">Barangay Certificate</option>
            <option value="clearance">Barangay Clearance</option>
            <option value="id">Barangay ID</option>
          </select>
          <button
            type="submit"
            className="w-full rounded bg-amber-700 p-2 text-white"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Request History Section */}
      <section className="mb-10 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          📂 Request History
        </h2>
        <p className="text-gray-600">No requests submitted yet.</p>
      </section>
    </main>
  );
}
