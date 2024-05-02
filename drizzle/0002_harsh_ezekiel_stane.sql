CREATE TABLE IF NOT EXISTS "seller" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text,
	"organization" text,
	"phone" text,
	"id_user" serial NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp,
	"enabled" boolean,
	"deleted" boolean
);
