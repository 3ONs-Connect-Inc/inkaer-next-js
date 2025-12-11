
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectOverview({ overview }: { overview: string }) {
  return (
    <section className="mb-12 ">
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {overview}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
