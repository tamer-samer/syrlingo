import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import "./globals.css";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SyrLingo",
  description: "Languaes learn app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${font.className}  antialiased`}>
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
