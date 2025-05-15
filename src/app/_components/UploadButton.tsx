import { useCallback, useState } from "react";
import { UploadDropzone } from "@uploadthing/react";
import { type OurFileRouter } from "~/app/api/uploadthing/core";

interface UploadButtonProps {
  onUploadComplete?: () => void;
}

export function UploadButton({ onUploadComplete }: UploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleClientUploadComplete = useCallback(() => {
    setIsUploading(false);
    onUploadComplete?.();
  }, [onUploadComplete]);

  return (
    <div className="mt-4">
      <UploadDropzone<OurFileRouter, "documentUploader">
        endpoint="documentUploader"
        onUploadBegin={() => setIsUploading(true)}
        onClientUploadComplete={handleClientUploadComplete}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
          setIsUploading(false);
        }}
        config={{ mode: "auto" }}
      />
      {isUploading && (
        <div className="mt-4 text-center text-sm text-gray-500">
          Uploading...
        </div>
      )}
    </div>
  );
} 