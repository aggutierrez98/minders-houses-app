import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <nav className="bg-[hsl(var(--magic-blue))] p-4">
          <div className="container mx-auto">
            {/* <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-[hsl(var(--hufflepuff-primary))] transition-colors"
            >
              Harry Potter Houses
            </Link> */}
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
