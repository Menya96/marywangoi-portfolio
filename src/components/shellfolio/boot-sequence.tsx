"use client";
import { useState, useEffect, FC } from "react";
import { useInterval } from "@/hooks/use-interval";

type BootSequenceProps = {
  onFinished: () => void;
};

const bootLogs = [
  "[0.000000] Linux version 6.5.0-14-generic (ubuntu@ubuntu)",
  "[0.123456] Command line: BOOT_IMAGE=/boot/vmlinuz-6.5.0-14-generic root=UUID=... ro quiet splash",
  "[0.234567] Kernel command line: ...",
  "[0.345678] DMI: Firebase/Studio, BIOS V1.0.0 04/01/2024",
  "[0.456789] Memory: 16G/16G available (14G kernel code, 1G reserved, 1G data)",
  "[1.567890] net eth0: Realtek RTL8168/8111/8112 Gigabit Ethernet Controller",
  "[2.678901] ata1.00: ATAPI: QEMU DVD-ROM, 2.5+, max UDMA/133",
  "[3.789012] EXT4-fs (sda1): mounted filesystem.",
  "[4.890123] systemd[1]: Starting systemd-journald.service...",
  "[5.901234] systemd[1]: Started Journal Service.",
  "[6.012345] shellfolio-init: Loading user profile...",
  "[6.123456] shellfolio-init: Mounting virtual filesystem...",
  "[6.234567] shellfolio-init: Initializing shell environment...",
  "[6.345678] shellfolio-init: Ready.",
];

export const BootSequence: FC<BootSequenceProps> = ({ onFinished }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);

  useInterval(() => {
    if (logIndex < bootLogs.length) {
      setLogs((prev) => [...prev, bootLogs[logIndex]]);
      setLogIndex((prev) => prev + 1);
    } else {
      setTimeout(onFinished, 200);
    }
  }, 150);

  return (
    <div className="text-xs text-muted-foreground">
      {logs.map((log, i) => (
        <p key={i}>{log}</p>
      ))}
      <span className="inline-block w-[0.5em] h-[1.2em] -mb-[0.2em] ml-1 bg-foreground blinking-cursor" />
    </div>
  );
};
