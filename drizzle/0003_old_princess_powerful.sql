DO $$ BEGIN
 ALTER TABLE "seller" ADD CONSTRAINT "seller_id_user_user_id_fk" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
