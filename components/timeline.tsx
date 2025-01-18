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
              <div key={event.id} className="relative flex items-center justify-between">
                <div className="w-[120px] shrink-0 text-right pr-6">
                  {event.date.includes('-') ? (
                    <div className="flex flex-col items-center text-primary font-bold gap-1">
                      <time className="text-lg">{event.date.split('-')[0].trim()}</time>
                      <div className="flex flex-col items-center gap-1 py-1 text-muted-foreground">
                        <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                      </div>
                      <time className="text-lg">{event.date.split('-')[1].trim()}</time>
                    </div>
                  ) : (
                    <time className="text-lg font-bold text-primary flex justify-center gap-1">{event.date}</time>
                  )}
                </div>
                <p className="flex-1 text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 