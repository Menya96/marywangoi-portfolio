import type { FC } from "react";

type HelpProps = {
  onCommandClick: (command: string) => void;
  commands: string[];
};

export const Help: FC<HelpProps> = ({ onCommandClick, commands }) => {
  return (
    <div>
      <p>Available commands:</p>
      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-3 lg:grid-cols-4">
        {commands.map((cmd) => (
          <li key={cmd}>
            <button
              onClick={() => onCommandClick(cmd)}
              className="text-accent hover:underline"
            >
              {cmd}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
