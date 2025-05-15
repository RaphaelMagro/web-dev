"use client";

import { useState } from "react";
import { FileUpload } from "./FileUpload";

interface FormData {
  title: string;
  description: string;
}

interface QuickUploadFormProps {
  onUploadSuccess?: () => void;
}

export function QuickUploadForm({ onUploadSuccess }: QuickUploadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadComplete = () => {
    // Reset form and notify parent
    setFormData({ title: "", description: "" });
    onUploadSuccess?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The actual upload is handled by the FileUpload component
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        required
        className="mb-4 w-full rounded border p-3"
      />
      <textarea
        name="description"
        placeholder="Description (Optional)"
        value={formData.description}
        onChange={handleInputChange}
        className="mb-4 w-full rounded border p-3"
        rows={4}
      />
      <FileUpload
        onUploadComplete={handleUploadComplete}
        metadata={{
          documentType: formData.title,
          purpose: formData.description,
          requestType: "administrative", // Mark as administrative document
          status: "approved", // Auto-approve uploads
        }}
      />
    </form>
  );
} 