CREATE TABLE IF NOT EXISTS "ticket" (
	"id" serial PRIMARY KEY NOT NULL,
	"cost" integer,
	"first_name" text,
	"last_name" text,
	"qr_string" text,
	"email" text,
	"phone" text,
	"dni" text,
	"created_at" timestamp,
	"updated_at" timestamp,
	"enabled" boolean,
	"deleted" boolean
);
