import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Navigation } from "./_components/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Barangay e-Services",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/SAN-AGUSTIN-removebg-preview.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
        <body className="min-h-screen bg-white">
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
