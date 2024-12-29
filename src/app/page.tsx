import { api } from "@/lib/treaty";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const varieties = await api.variety.all.get();

  return (
    <div>
      {varieties.data?.map((variety) => (
        <Card key={variety.id}>
          <CardHeader>
            <CardTitle>{variety.name}</CardTitle>
            <CardDescription>{variety.region?.country.name}</CardDescription>
          </CardHeader>
          <CardContent>
            {variety.tastingNotes.map((note, i) => (
              <Badge className="mx-1" variant="outline" key={i}>
                {note}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
