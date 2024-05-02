ALTER TABLE "ticket" ADD COLUMN "created_by" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ticket" ADD CONSTRAINT "ticket_created_by_seller_id_fk" FOREIGN KEY ("created_by") REFERENCES "seller"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
