import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Creacy - Photography Agency Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body>
        <main className="mx-auto max-w-7xl px-5">
          {children}
        </main>
      </body>
    </html>
  );
}
