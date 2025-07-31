import { whoamiData, socials } from "@/lib/data";
import { TypingText } from "../typing-text";
import { Github, Linkedin } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
};

const InfoLine = ({ label, value }: { label: string; value: string }) => (
  <div className="flex">
    <span className="w-28 text-muted-foreground">{label}</span>
    <span>{value}</span>
  </div>
);

export const Whoami = () => {
  return (
    <div className="space-y-2">
      <InfoLine label="USER:" value={whoamiData.name} />
      <InfoLine label="TITLE:" value={whoamiData.title} />
      <InfoLine label="STATUS:" value={whoamiData.status} />
      <InfoLine label="LOCATION:" value={whoamiData.location} />
      <div className="pt-2">
        <TypingText text={whoamiData.bio} speed={10} />
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
