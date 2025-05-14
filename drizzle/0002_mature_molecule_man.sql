ALTER TABLE "web-dev_file_upload" ADD COLUMN "request_type" varchar(50) DEFAULT 'document' NOT NULL;--> statement-breakpoint
ALTER TABLE "web-dev_file_upload" ADD COLUMN "email" varchar(256);--> statement-breakpoint
ALTER TABLE "web-dev_file_upload" ADD COLUMN "phone" varchar(50);--> statement-breakpoint
ALTER TABLE "web-dev_file_upload" ADD COLUMN "message" text;--> statement-breakpoint
CREATE INDEX "request_type_idx" ON "web-dev_file_upload" USING btree ("request_type");