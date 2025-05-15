import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { fileUploads } from "~/server/db/schema";

const f = createUploadthing();

export type UploadMetadata = {
  fullName?: string;
  address?: string;
  documentType?: string;
  purpose?: string;
  email?: string | null;
  phone?: string | null;
};

// This is the type for the metadata returned by the middleware
type MiddlewareMetadata = UploadMetadata & {
  userId: string;
};

export const ourFileRouter = {
  documentUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
    pdf: { maxFileSize: "8MB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {      
      await db.insert(fileUploads).values({
        fileName: file.name,
        fileSize: file.size,
        mimeType: file.type,
        fileData: file.url,
        uploadedBy: metadata.userId,
        status: 'approved',
        fullName: '',
        address: '',
        documentType: file.name,
        purpose: '',
        requestType: 'administrative',
        email: null,
        phone: null
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 