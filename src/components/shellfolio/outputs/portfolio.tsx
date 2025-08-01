"use client";

import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from 'react';
import { Github } from "lucide-react";
import { FaMediumM } from "react-icons/fa";

interface PortfolioProps {
  onFinished?: () => void;
}

export const Portfolio = ({ onFinished }: PortfolioProps) => {
  const [visibleProjects, setVisibleProjects] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleProjects < projects.length) {
      const timer = setTimeout(() => {
        setVisibleProjects((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (onFinished) {
      const finishTimer = setTimeout(onFinished, 100);
      return () => clearTimeout(finishTimer);
    }
  }, [visibleProjects, projects.length, onFinished]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleProjects]);

  return (
    <div className="space-y-8">
      {projects.slice(0, visibleProjects).map((project, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-primary">{project.name}</h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
              >
                {project.url.includes("github.com") ? (
                  <Github size={16} />
                ) : project.url.includes("medium.com") || project.url.includes("devops.dev") ? (
                  <FaMediumM size={16} />
                ) : null}
                <span className="text-sm">
                  {project.url.includes("github.com") ? "Source" : project.url.includes("medium.com") || project.url.includes("devops.dev") ? "Article" : "Link"}
                </span>
              </a>
            )}
          </div>
          <p className="text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
