import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opaline | Alaska",
  description: "Welcome to Opaline, Alaska. A world of stories, secrets, and lives waiting to be lived.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
