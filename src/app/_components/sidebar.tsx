export function SideBar() {
  return (
    <div className="fixed top-41 left-0 z-50 h-screen w-50 bg-gray-600 p-4 text-white">
      <h2 className="mb-3 text-start text-2xl font-bold">HOME</h2>
      <nav className="flex flex-col space-y-2 text-start">
        <a href="#" className="rounded bg-gray-800 p-2 hover:bg-gray-700">
          About Us
        </a>
        <a
          href="#Barangay-Officials"
          className="rounded bg-gray-800 p-2 hover:bg-gray-700"
        >
          Barangay Officials
        </a>
        <a
          href="#Privacy-Policy"
          className="rounded bg-gray-800 p-2 hover:bg-gray-700"
        >
          Privacy Policy
        </a>
        <a href="#FAQs" className="rounded bg-gray-800 p-2 hover:bg-gray-700">
          FAQs
        </a>
        <a
          href="#Our-Location"
          className="rounded bg-gray-800 p-2 hover:bg-gray-700"
        >
          Our Location
        </a>
      </nav>
    </div>
  );
}
