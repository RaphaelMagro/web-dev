import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "~/server/db";
import { fileUploads } from "~/server/db/schema";
import { desc } from "drizzle-orm";
import RequestList from "./request-list";
import AdminNav from "~/app/_components/AdminNav";

export default async function RequestsPage() {
  const { userId } = await auth();
  
  if (!userId) {
    console.log('No user ID found, redirecting to sign-in');
    redirect("/sign-in");
  }

  console.log('Fetching requests for user:', userId);

  // Fetch requests server-side for initial load
  const dbRequests = await db.select()
    .from(fileUploads)
    .orderBy(desc(fileUploads.createdAt));

  console.log('Fetched requests:', dbRequests);

  // Transform the database results to match the component's expected types
  const requests = dbRequests.map(request => ({
    id: request.id,
    fileName: request.fileName,
    fileSize: request.fileSize,
    mimeType: request.mimeType,
    fileData: request.fileData,
    uploadedBy: request.uploadedBy,
    status: request.status,
    fullName: request.fullName,
    address: request.address,
    documentType: request.documentType,
    purpose: request.purpose,
    requestType: request.requestType,
    email: request.email,
    phone: request.phone,
    message: request.message,
    createdAt: request.createdAt.toISOString(),
    updatedAt: request.updatedAt.toISOString(),
  }));

  console.log('Transformed requests:', requests);

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNav />
      
      <main className="flex-grow mx-6 md:mx-20 lg:mx-40">
        {/* Incoming Requests Section */}
        <section className="mt-20 mb-10">
          <h2 className="mb-6 text-center text-3xl font-bold text-amber-600">
            📥 Incoming Requests
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <RequestList initialRequests={requests} />
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 p-6 text-center text-sm text-white mt-auto">
        © 2025 Barangay San Agustin - Admin Portal. All rights reserved.
      </footer>
    </div>
  );
}
