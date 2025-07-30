import { experiences } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export const Experience = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={exp.company}>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-primary">{exp.company}</h3>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </div>
            <h4 className="text-muted-foreground">{exp.role}</h4>
            <p className="mt-2 text-sm">{exp.description}</p>
          </div>
          {index < experiences.length - 1 && <Separator className="mt-6 bg-border/50" />}
        </div>
      ))}
    </div>
  );
};
