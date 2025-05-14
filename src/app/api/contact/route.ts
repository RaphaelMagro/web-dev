import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { fileUploads } from "~/server/db/schema";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, email, phone, message, address } = data;

    // Validate required fields
    if (!fullName || !message || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert contact request into database
    const result = await db.insert(fileUploads).values({
      fileName: 'contact_request',
      fileSize: 0,
      mimeType: 'text/plain',
      fileData: '',
      uploadedBy: 'contact_form',
      status: 'pending',
      fullName,
      address,
      documentType: 'contact',
      purpose: message,
      requestType: 'contact',
      email: email || null,
      phone: phone || null,
      message
    }).returning();

    const contactRequest = result[0];
    if (!contactRequest) {
      throw new Error("No result returned from database insert");
    }

    // Revalidate the admin requests page
    revalidatePath('/admin/requests');

    return NextResponse.json({ 
      message: 'Contact request submitted successfully',
      request: {
        id: contactRequest.id,
        fullName: contactRequest.fullName,
        status: contactRequest.status
      }
    });

  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: "Failed to submit contact request" },
      { status: 500 }
    );
  }
} 