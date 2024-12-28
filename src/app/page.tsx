import { treaty } from "@elysiajs/eden";
import type { App } from "./api/[[...slugs]]/route";

const client = treaty<App>("localhost:3000");

export default async function Home() {
  const yeet = await client.api.index.get();

  return (
    <div>
      <h1>Hello from Next</h1>

      <p>{yeet.data}</p>
    </div>
  );
}
