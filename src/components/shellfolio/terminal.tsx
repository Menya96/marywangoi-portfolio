"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Help } from "./outputs/help";
import { Welcome } from "./outputs/welcome";
import { Whoami } from "./outputs/whoami";
import { Skills } from "./outputs/skills";
import { Experience } from "./outputs/experience";
import { Ascii } from "./outputs/ascii";
import { ThemeToggle } from "../theme-toggle";
import { BootSequence } from "./boot-sequence";

type HistoryItem = {
  id: number;
  command: string;
  Output: React.ReactNode;
};

export function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isBootFinished, setIsBootFinished] = useState(false);
  const [isWelcomeFinished, setIsWelcomeFinished] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const commandMap: Record<string, React.ReactNode> = useMemo(() => ({
    'whoami': <Whoami />,
    'skills': <Skills />,
    'experience': <Experience />,
    'generate_ascii_art': <Ascii />,
  }), []);

  const availableCommands = useMemo(() => ['whoami', 'skills', 'experience', 'generate_ascii_art', 'help', 'clear'], []);
  
  const commandMapWithHelp = useMemo(() => ({
    ...commandMap,
    'help': <Help commands={availableCommands} onCommandClick={(cmd) => handleCommandClick(cmd)} />,
  }), [commandMap, availableCommands]);

  const handleCommandClick = useCallback((command: string) => {
    if (command === 'clear') {
      setHistory([]);
      return;
    }
    
    if (command in commandMapWithHelp) {
      setHistory((prev) => [
        ...prev,
        {
          id: prev.length,
          command,
          Output: commandMapWithHelp[command],
        },
      ]);
    }
  }, [commandMapWithHelp]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 50); // Added a small delay
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="rounded-lg border bg-card/20 shadow-lg h-[90vh] flex flex-col">
      <header className="flex items-center justify-between border-b p-4 md:p-6 flex-shrink-0">
        <div className="flex items-center gap-1">
          <Icons.logo className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-semibold">Shellfolio</h1>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>ONLINE</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-grow space-y-6 overflow-y-auto px-4 md:px-6 py-4">
        {!isBootFinished ? (
          <BootSequence onFinished={() => setIsBootFinished(true)} />
        ) : (
          <Welcome onFinished={() => setIsWelcomeFinished(true)} />
        )}

        {history.map(({ id, command, Output }) => (
          <div key={id}>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">&gt;</span>
              <span className="font-semibold">{command}</span>
            </div>
            <div className="mt-2 pl-4">{Output}</div>
          </div>
        ))}
        
        {isWelcomeFinished && (
           <div className="flex items-center gap-2">
             <span className="text-primary font-bold">&gt;</span>
             <span className="w-2 h-4 bg-foreground blinking-cursor"/>
           </div>
        )}
        
        <div ref={bottomRef} />
      </div>

      {isWelcomeFinished && (
        <footer className="mt-auto pt-4 border-t p-4 md:p-6 flex-shrink-0">
          <p className="text-sm text-muted-foreground mb-2">Click a command to execute:</p>
          <div className="flex flex-wrap gap-2">
            {availableCommands.map((cmd) => (
              <Button
                key={cmd}
                variant="outline"
                size="sm"
                onClick={() => handleCommandClick(cmd)}
                className="font-code"
              >
                {cmd}
              </Button>
            ))}
          </div>
        </footer>
      )}
    </div>
  );
}
