export function SideBar() {
  return (
    <div className="fixed top-61 left-0 z-50 h-screen w-90 bg-gray-600 p-4 text-white">
      <h2 className="mb-6 text-center text-2xl font-bold">HOME</h2>
      <nav className="flex flex-col space-y-9 text-center">
        <a href="#" className="rounded bg-gray-800 p-3 hover:bg-gray-700">
          About Us
        </a>
        <a href="#" className="rounded bg-gray-800 p-3 hover:bg-gray-700">
          Barangay Officials
        </a>
        <a href="#" className="rounded bg-gray-800 p-3 hover:bg-gray-700">
          Privacy Policy
        </a>
        <a href="#" className="rounded bg-gray-800 p-3 hover:bg-gray-700">
          FAQs
        </a>
        <a href="#" className="rounded bg-gray-800 p-3 hover:bg-gray-700">
          Our Location
        </a>
      </nav>
    </div>
  );
}
