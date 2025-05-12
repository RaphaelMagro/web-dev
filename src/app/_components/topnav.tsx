import Link from "next/link";

export function TopNav() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-amber-300">
      <div className="flex items-center justify-center p-4 font-serif text-3xl font-semibold text-black">
        <img
          src="/SAN-AGUSTIN-removebg-preview.png"
          alt="Logo"
          className="h-20 w-20 rounded-full bg-white p-1"
        />
        Barangay San Agustin
      </div>
      <ul className="sticky top-0 left-0 z-50 flex w-full items-center justify-center gap-20 border-b bg-amber-500 p-3 text-xl text-black">
        <li>
          <Link href={"/homepage"}>Home</Link>
        </li>
        <li>
          <Link href={"/announcements"}>Announcements</Link>
        </li>
        <li>
          <Link href={"/inquiry"}>Request</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
