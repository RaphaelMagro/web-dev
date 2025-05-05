import Link from "next/link";

export function TopNav() {
  return (
    <nav className="bg-amber-300">
      <div className="flex items-center justify-center">
        <img
          src="/SAN-AGUSTIN-removebg-preview.png"
          alt="Logo"
          className="h-35 w-35"
        />
      </div>
      <div className="w-full p-2 text-center font-serif text-3xl font-semibold text-black">
        Barangay San Agustin
      </div>
      <ul className="justify sticky top-0 left-0 z-50 flex w-full items-center border-b bg-amber-500 p-3 text-xl text-black">
        <li>Home</li>
        <li>
          <Link href={"/announcements"}>Announcements</Link>
        </li>
        <li>
          <Link href={"/request"}>Request</Link>
        </li>
        <li>
          <Link href={"/contact us"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
