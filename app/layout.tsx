import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const fig = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJ-FY",
  description: "Listen to your favorite songs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fig} } antialiased`}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
