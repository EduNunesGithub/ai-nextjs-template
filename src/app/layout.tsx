import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

export const metadata: Metadata = {
  description:
    "Template Next.js com TypeScript, Tailwind CSS e ferramentas de desenvolvimento.",
  title: "Next.js Template",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
