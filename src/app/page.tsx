import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BarangayLandingPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/bglandingpage.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
        quality={100}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Logo */}
        <Image
          src="/SAN-AGUSTIN-removebg-preview.png"
          alt="Barangay Logo"
          width={112}
          height={112}
          className="mb-4 rounded-full bg-white p-1"
        />

        {/* Heading */}
        <h1 className="mb-2 text-3xl font-bold [text-shadow:_2px_2px_4px_#000000] md:text-5xl">
          Welcome to Barangay San Agustin
        </h1>
        <p className="mb-6 text-lg [text-shadow:_1px_1px_2px_#000000] md:text-2xl">
          Betis, Guagua, Pampanga, 2003
        </p>

        {/* Buttons */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/dashboard">
            <button className="rounded-md bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-yellow-500">
              Enter as Admin
            </button>
          </Link>
          <Link href="/homepage">
            <button className="rounded-md bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-yellow-500">
              Enter as Resident
            </button>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="flex items-center gap-6 text-sm text-yellow-300 [text-shadow:_1px_1px_2px_#000000]">
          <span>📍 Address</span>
          <span>📞 Contact</span>
          <span>🏢 Office</span>
        </div>
      </div>
    </div>
  );
}
