ALTER TABLE "job_application" ADD COLUMN "date_applied" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "job_application" ADD COLUMN "favorite" boolean DEFAULT false NOT NULL;