import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mist.Quest - RPG Resources',
  description: 'A mystical repository of tabletop roleplaying game resources and stories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cinzel.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-[#0a0a0f]">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}