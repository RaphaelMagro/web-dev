import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { fileUploads } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Count pending requests
    const pendingRequests = await db
      .select({ count: fileUploads.id })
      .from(fileUploads)
      .where(eq(fileUploads.status, 'pending'));

    // Count total documents
    const totalDocuments = await db
      .select({ count: fileUploads.id })
      .from(fileUploads);

    return NextResponse.json({
      pendingRequests: pendingRequests.length,
      totalDocuments: totalDocuments.length
    });

  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 