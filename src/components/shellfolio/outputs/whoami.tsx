"use client";

import { whoamiData, socials } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from 'react';
import { FaMediumM } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
  Medium: <FaMediumM />,
};

interface WhoamiProps {
  onFinished?: () => void;
}

const InfoLine = ({ label, value, delay, onFinished }: { label: string; value: string; delay: number, onFinished?: () => void }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      onFinished?.();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, onFinished]);

  return visible ? (
    <div className="flex">
      <span className="w-28 text-muted-foreground font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  ) : null;
};

export const Whoami = ({ onFinished }: WhoamiProps) => {
  const [lastLineVisible, setLastLineVisible] = useState(false);
  const [bioVisible, setBioVisible] = useState(false);

  useEffect(() => {
    if (lastLineVisible && bioVisible && onFinished) {
      const timer = setTimeout(onFinished, 100);
      return () => clearTimeout(timer);
    }
  }, [lastLineVisible, bioVisible, onFinished]);

  return (
    <div className="space-y-2">
      <InfoLine label="USER:" value={whoamiData.name} delay={0} />
      <InfoLine label="TITLE:" value={whoamiData.title} delay={300} />
      <InfoLine label="STATUS:" value={whoamiData.status} delay={600} />
      <InfoLine label="LOCATION:" value={whoamiData.location} delay={900} onFinished={() => setLastLineVisible(true)} />
      
      <div className="pt-2">
        <p className="whitespace-pre-wrap">{whoamiData.bio}</p>
      </div>

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
