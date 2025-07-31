"use client";

import { whoamiData, socials } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from 'react';

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
};

const InfoLine = ({ label, value, delay }: { label: string; value: string; delay: number }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return visible ? (
    <div className="flex">
      <span className="w-28 text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  ) : null;
};

export const Whoami = () => {
  const [bioVisible, setBioVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBioVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="space-y-2">
      <InfoLine label="USER:" value={whoamiData.name} delay={0} />
      <InfoLine label="TITLE:" value={whoamiData.title} delay={300} />
      <InfoLine label="STATUS:" value={whoamiData.status} delay={600} />
      <InfoLine label="LOCATION:" value={whoamiData.location} delay={900} />
      
      {bioVisible && (
        <div className="pt-2">
          <p className="whitespace-pre-wrap">{whoamiData.bio}</p>
        </div>
      )}

      <div className="flex items-center gap-4 pt-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            {iconMap[social.name]}
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
