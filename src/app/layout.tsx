import type { Metadata } from "next";
import "@/app/globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme";

export const metadata = {
  title: "AGIdle - The AGI Incremental Game",
} satisfies Metadata;

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html
      lang="en"
      // Needed for next-themes.
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}
