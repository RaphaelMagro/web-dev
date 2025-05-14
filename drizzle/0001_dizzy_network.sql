ALTER TABLE "web-dev_file_upload" ADD COLUMN "full_name" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "web-dev_file_upload" ADD COLUMN "address" text NOT NULL;--> statement-breakpoint
ALTER TABLE "web-dev_file_upload" ADD COLUMN "document_type" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "web-dev_file_upload" ADD COLUMN "purpose" text NOT NULL;--> statement-breakpoint
CREATE INDEX "full_name_idx" ON "web-dev_file_upload" USING btree ("full_name");