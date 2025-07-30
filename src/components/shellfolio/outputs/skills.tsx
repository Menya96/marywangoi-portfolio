"use client";

import { skills } from "@/lib/data";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export const Skills = () => {
  return (
    <div>
      <p>My current skill set:</p>
      <ul className="mt-4 space-y-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </ul>
    </div>
  );
};

const SkillItem = ({ name, level }: { name: string; level: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 500);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <li className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </li>
  );
};
