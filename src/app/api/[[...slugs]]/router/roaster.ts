import { db } from "@/lib/db";

import { Elysia } from "elysia";

export const roasterRouter = new Elysia().group("/roaster", (app) =>
  app.get("/all", async () => {
    return await db.roaster.findMany({});
  })
);
