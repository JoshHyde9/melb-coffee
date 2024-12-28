import { treaty } from "@elysiajs/eden";
import type { App } from "./api/[[...slugs]]/route";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";

const client = treaty<App>("localhost:3000");

export default async function Home() {
  const yeet = await client.api.index.get();

  return (
    <div>
      <ModeToggle />
      <h1>Hello from Next</h1>

      <p>{yeet.data}</p>

      <Button variant="outline">Button</Button>
    </div>
  );
}
