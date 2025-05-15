import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { fileUploads } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // Delete the document from the database
    await db
      .delete(fileUploads)
      .where(eq(fileUploads.id, parseInt(params.id, 10)));

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting document:', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 