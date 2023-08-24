import { type Codegen, KyselyAuth } from "@auth/kysely-adapter";
import { type DB } from "./types";
import { PlanetScaleDialect } from "kysely-planetscale";
import { customAlphabet } from "nanoid";

export const db = new KyselyAuth<DB, Codegen>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});

export const genId = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 12);
