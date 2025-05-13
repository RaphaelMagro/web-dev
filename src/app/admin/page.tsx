import Image from "next/image";

export default function AdminPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bglandingpage.jpg"
          alt="Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/SAN-AGUSTIN-removebg-preview.png"
            alt="Barangay Logo"
            width={150}
            height={150}
            className="rounded-full bg-white p-2"
          />
        </div>

        {/* Welcome Text */}
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Welcome to Barangay San Agustin
        </h1>
        <p className="mb-12 text-center text-2xl text-white">
          Betis, Guagua, Pampanga, 2003
        </p>

        {/* Login Form */}
        <div className="w-full max-w-sm rounded-lg bg-yellow-400 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-black">
            Log In as Admin
          </h2>
          <form className="space-y-4">
            <div className="text-center">
              <p className="mb-2 text-sm text-black">Enter Password</p>
              <input
                type="password"
                required
                className="w-full rounded-md border border-gray-300 p-2 text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md border border-black bg-yellow-400 p-2 text-black hover:bg-yellow-500"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
