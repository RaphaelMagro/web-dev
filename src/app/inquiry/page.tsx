import Footer from "../_components/footer";

export default function InquiryPage() {
  return (
    <div className="flex-1 pt-32">
      <div className="mx-auto max-w-4xl px-4">
        {/* Title */}
        <h1 className="mb-8 flex items-center justify-center gap-2 text-3xl font-bold text-yellow-400">
          <span>📄</span> Request for Barangay Document
        </h1>

        {/* Instructions Box */}
        <div className="mb-8 rounded-lg bg-gray-700 p-4 text-white">
          <div className="flex items-center gap-2">
            <span>📢</span>
            <h2 className="font-bold">Instructions</h2>
          </div>
          <p className="mt-2">
            Please fill out this form to request official barangay documents.
            Ensure all required fields are filled correctly.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-lg bg-gray-200 p-8">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="block font-semibold">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block font-semibold">
                  Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>

              {/* Document Type */}
              <div>
                <label className="block font-semibold">
                  Document Type<span className="text-red-500">*</span>
                </label>
                <select className="mt-1 w-full rounded-md border p-2">
                  <option value="">Select document type</option>
                  <option value="barangay_clearance">Barangay Clearance</option>
                  <option value="certificate_residency">
                    Certificate of Residency
                  </option>
                  <option value="business_permit">Business Permit</option>
                  <option value="indigency">Certificate of Indigency</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold">Email (Optional)</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border p-2"
                />
              </div>

              {/* Upload ID */}
              <div>
                <label className="block font-semibold">
                  Upload Valid ID<span className="text-red-500">*</span>
                </label>
                <div className="mt-1 cursor-pointer rounded-md border-2 border-dashed border-gray-400 p-4 text-center">
                  <label htmlFor="id-upload" className="cursor-pointer">
                    <p>Upload Here</p>
                    <input
                      id="id-upload"
                      type="file"
                      required
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block font-semibold">
                Purpose of request<span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                className="mt-1 w-full rounded-md border p-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-md bg-yellow-400 px-8 py-2 font-semibold text-black hover:bg-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
