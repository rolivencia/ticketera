CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text,
	"last_name" text,
	"user_name" text,
	"email" text,
	"created_at" timestamp,
	"updated_at" timestamp,
	"enabled" boolean,
	"deleted" boolean
);
