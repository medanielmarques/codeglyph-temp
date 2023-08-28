import { Kysely } from "kysely";
import { type DB } from "./types";
import { PlanetScaleDialect } from "kysely-planetscale";
import { customAlphabet } from "nanoid";
import { createClient } from "@supabase/supabase-js";

export type { DB } from "./types";

export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});

export const genId = (size?: number) =>
  customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", size ?? 12)();

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);
