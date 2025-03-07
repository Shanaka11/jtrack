CREATE TABLE "job_application" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "job_application_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"job_title" varchar(30) NOT NULL,
	"company" varchar(50) NOT NULL,
	"user_id" varchar(40) NOT NULL,
	"status" varchar(20) NOT NULL,
	"link" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
