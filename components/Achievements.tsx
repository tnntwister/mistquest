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
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <Medal className="h-5 w-5" />
        {title}
      </h3>
      <div className="grid gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
            <Medal className="h-5 w-5 shrink-0 text-primary" />
            <div className="font-medium">{achievement.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 