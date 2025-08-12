import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Background } from '@/components/shellfolio/background';

export const metadata: Metadata = {
  title: 'MaryWangoi-Shellfolio',
  description: 'An interactive portfolio with a terminal interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" type="image/png" />

      </head>
      <body className="font-code antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
