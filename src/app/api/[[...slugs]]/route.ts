import { Elysia } from "elysia";

import { varietyRouter } from "./router/variety";
import { roasterRouter } from "./router/roaster";

const app = new Elysia({ prefix: "/api" })
  .get("/", () => "Hello from Elysia.")
  .use(varietyRouter)
  .use(roasterRouter)

export type App = typeof app;

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const DELETE = app.handle;
