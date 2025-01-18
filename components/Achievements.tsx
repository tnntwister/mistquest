import { Medal } from "lucide-react";

interface Achievement {
  title: string;
}

interface AchievementsProps {
  achievements: Achievement[];
  title?: string;
}

export function Achievements({ achievements, title = "Réalisations" }: AchievementsProps) {
  return (
    <div className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground">
      <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
        {title}
      </h3>
      <div className="grid gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-3 p-4">
            <Medal className="h-5 w-5 shrink-0 text-primary" />
            <div className="font-medium text-foreground">{achievement.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 