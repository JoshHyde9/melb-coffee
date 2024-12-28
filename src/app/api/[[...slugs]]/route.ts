import { Elysia } from "elysia";
import { epicRouter } from "./router/epic";

const app = new Elysia({ prefix: "/api" })
  .get("/", () => "Hello from Elysia.")
  .use(epicRouter);

export type App = typeof app;

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const DELETE = app.handle;
