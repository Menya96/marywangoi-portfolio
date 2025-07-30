"use client";

import { useState, useRef, useTransition } from 'react';
import { generateAsciiArt } from '@/ai/flows/generate-ascii-art';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { UploadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AsciiArtGenerator = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [asciiArt, setAsciiArt] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        variant: 'destructive',
        title: 'Invalid File Type',
        description: 'Please select an image file.',
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUri = e.target?.result as string;
      generate(dataUri);
    };
    reader.onerror = () => {
      toast({
        variant: 'destructive',
        title: 'Error Reading File',
        description: 'Could not read the selected file.',
      });
    };
    reader.readAsDataURL(file);
  };
  
  const generate = (photoDataUri: string) => {
    setAsciiArt(null);
    let progressInterval: NodeJS.Timeout;

    startTransition(async () => {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 5 : 90));
      }, 200);

      const result = await generateAsciiArt({ photoDataUri });
      clearInterval(progressInterval);
      setProgress(100);

      if (result?.asciiArt) {
        setAsciiArt(result.asciiArt);
      } else {
        toast({
          variant: 'destructive',
          title: 'ASCII Art Generation Failed',
          description: 'Could not generate ASCII art from the image.',
        });
      }
    });
  };

  return (
    <div className="space-y-4">
      <p>Upload a photo to see some AI magic. Your photo will be converted into ASCII art.</p>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <Button
        onClick={() => fileInputRef.current?.click()}
        disabled={isPending}
      >
        <UploadCloud />
        {isPending ? 'Generating...' : 'Upload Photo'}
      </Button>

      {isPending && (
        <div className="w-full">
          <Progress value={progress} className="h-2 transition-all duration-300 ease-linear" />
          <p className="text-sm text-muted-foreground mt-2 text-center">AI is thinking...</p>
        </div>
      )}

      {asciiArt && (
        <pre className={cn(
          "mt-4 p-4 rounded-lg bg-background/50 overflow-x-auto text-xs leading-tight",
          "transition-opacity duration-500 animate-in fade-in"
        )}>
          {asciiArt}
        </pre>
      )}
    </div>
  );
};
