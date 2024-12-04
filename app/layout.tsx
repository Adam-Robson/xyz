import type { Metadata } from "next";
import { karla } from '@/fonts/fonts';

import "./globals.css";
import "./colors.css";
import "./home.css";

export const metadata: Metadata = {
  title: "Le FOG",
  description: "This is the website for Le FOG"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
