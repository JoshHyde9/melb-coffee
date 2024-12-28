import { Elysia } from "elysia";

export const epicRouter = new Elysia().group("/epic", (app) =>
  app.get("/waaaa", async ({}) => {
    return { success: "Hello from epic router" };
  })
);
