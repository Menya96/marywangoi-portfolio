"use client";
import type { FC } from "react";
import { TypingText } from "../typing-text";

type WelcomeProps = {
  onFinished: () => void;
};

export const Welcome: FC<WelcomeProps> = ({ onFinished }) => {
  const welcomeText = `Welcome to Shellfolio v1.0.0
System check complete. All modules loaded.
Type 'help' or click a command below to get started.`;

  return <TypingText text={welcomeText} onFinished={onFinished} />;
};
