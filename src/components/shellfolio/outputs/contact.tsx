"use client";

import { socials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin } from "lucide-react";
import { FaMediumM } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github />,
  LinkedIn: <Linkedin />,
  Medium: <FaMediumM />,
};

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a demo. In a real application, you'd handle form submission here.
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you shortly.",
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };


  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-primary mb-2">Find me on the web</h3>
        <div className="flex items-center gap-4">
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
      
      <div>
        <h3 className="font-semibold text-primary mb-2">Availability</h3>
        <div className="text-sm space-y-1">
            <p>Mon - Fri: 9:00 am – 5:00 pm</p>
            <p><span className="font-semibold">Emergency Support:</span> 24/7 for clients</p>
        </div>
      </div>

      <div className="w-full">
        <h3 className="font-semibold text-primary mb-2">...or send a message</h3>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message here..." required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};
