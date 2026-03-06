import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oliver Automation — AI Infrastructure, Delivered",
  description:
    "We set up, configure, and manage AI agent systems for developers and small teams. Memory architectures, tool integrations, automation pipelines — operational from day one.",
  openGraph: {
    title: "Oliver Automation — AI Infrastructure, Delivered",
    description:
      "AI agent infrastructure for developers and small teams.",
    type: "website",
    url: "https://oliverautomation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
