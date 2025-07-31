import { bio, socials } from "@/lib/data";
import { TypingText } from "../typing-text";
import { Github, Linkedin } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
};

export const Whoami = () => {
  return (
    <div>
      <TypingText text={bio} speed={20} />
      <div className="flex items-center gap-4 mt-4">
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
