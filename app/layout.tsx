import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Inter, Cinzel } from 'next/font/google';
import { Footer } from "@/components/Footer"
import { Providers } from './providers';
import { SITE_NAME } from './config';

const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: 'Zone de développement roliste',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${cinzel.variable} font-sans antialiased`}>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}