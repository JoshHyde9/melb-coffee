import type { App } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";

export const { api } = treaty<App>("localhost:3000");