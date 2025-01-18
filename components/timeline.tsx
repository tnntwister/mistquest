import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TimelineEvent {
  id: string;
  date: string;
  description: string;
  type?: "success" | "warning" | "danger" | "info";
}

interface TimelineProps {
  title?: string;
  events: TimelineEvent[];
}

export function Timeline({ title = "Chronologie", events }: TimelineProps) {
  return (
    <Card>
      <CardHeader>
        <h4 className="text-xl font-semibold">{title}</h4>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-[100px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="relative flex">
                <time className="w-[80px] text-lg font-bold text-primary shrink-0 text-right pr-6">
                  {event.date}
                </time>
                <p className="flex-1 pl-8 text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 