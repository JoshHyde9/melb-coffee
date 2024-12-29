import { db } from "@/lib/db";

import { Elysia } from "elysia";

export const varietyRouter = new Elysia().group("/variety", (app) =>
  app.get("/all", async () => {
    return await db.variety.findMany({
      include: {
        region: {
          include: {
            country: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  })
);
