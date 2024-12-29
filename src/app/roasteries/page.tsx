import { api } from "@/lib/treaty";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const roasteries = await api.roaster.all.get();

  return (
    <div>
      {roasteries.data?.map((roaster) => (
        <Card key={roaster.id}>
          <CardHeader>
            <CardTitle>{roaster.name}</CardTitle>
            <CardDescription>{roaster.website}</CardDescription>
          </CardHeader>
          <CardContent>{roaster.description}</CardContent>
        </Card>
      ))}
    </div>
  );
}
