import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Inter, Cinzel } from 'next/font/google';
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

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
      <body className={`${inter.className} ${cinzel.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className={`min-h-screen bg-[#0a0a0f] flex flex-col`}>
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}