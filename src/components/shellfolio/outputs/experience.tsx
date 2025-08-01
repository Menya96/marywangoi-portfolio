"use client";

import { experiences } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from 'react';

interface ExperienceProps {
  onFinished?: () => void;
}

export const Experience = ({ onFinished }: ExperienceProps) => {
  const [visibleExperiences, setVisibleExperiences] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleExperiences < experiences.length) {
      const timer = setTimeout(() => {
        setVisibleExperiences((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (onFinished) {
      const finishTimer = setTimeout(onFinished, 100);
      return () => clearTimeout(finishTimer);
    }
  }, [visibleExperiences, experiences.length, onFinished]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleExperiences]);

  return (
    <div className="space-y-6">
      {experiences.slice(0, visibleExperiences).map((exp, index) => (
        <div key={exp.company}>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-primary">{exp.company}</h3>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </div>
            <h4 className="text-muted-foreground">{exp.role}</h4>
            <ul className="mt-2 text-sm list-disc list-inside">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
          {index < visibleExperiences - 1 && <Separator className="mt-6 bg-border/50" />}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
