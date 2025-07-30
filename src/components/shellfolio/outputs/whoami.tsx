import { bio } from "@/lib/data";
import { TypingText } from "../typing-text";

export const Whoami = () => {
  return <TypingText text={bio} speed={20} />;
};
