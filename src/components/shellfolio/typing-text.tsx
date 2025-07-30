"use client";

import { useState, useEffect } from "react";
import { useInterval } from "@/hooks/use-interval";
import { cn } from "@/lib/utils";

type TypingTextProps = {
  text: string;
  speed?: number;
  className?: string;
  onFinished?: () => void;
};

export function TypingText({ text, speed = 50, className, onFinished }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useInterval(
    () => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsFinished(true);
        if (onFinished) {
          onFinished();
        }
      }
    },
    isFinished ? null : speed
  );
  
  // Effect to handle instant display for very short texts or as a fallback
  useEffect(() => {
    if (text.length === 0) {
      setIsFinished(true);
      if (onFinished) onFinished();
    }
  }, [text, onFinished]);


  return (
    <p className={cn("whitespace-pre-wrap", className)}>
      {displayedText}
      {!isFinished && <span className="inline-block w-[0.5em] h-[1.2em] -mb-[0.2em] ml-1 bg-foreground blinking-cursor" />}
    </p>
  );
}
