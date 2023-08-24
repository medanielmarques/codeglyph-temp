import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { db } from "@/server/db";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      const idk = await db
        .selectFrom("User")
        .selectAll()
        // .where("User.id", "=", "1")
        .execute();

      console.log(idk, "idk");
      console.log(process.env.DATABASE_URL, "DATABASE_URL");

      return {
        greeting: `Hello ${input.text}`,
        idk,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
