import AppNavbar from "@/components/Navbar";
import TrpcProvider from "@/lib/trpc/Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Imus",
  description: "Required: Please edit this",
  openGraph: {
    title: "Team Imus",
    description: "Required: Please edit this",
    images: "Required: Please edit this", // Image link (Sample: https://i.postimg.cc/Z5j8jwqs/og-image.png)
    authors: "Required: Please edit this",
    creators: "Required: Please edit this",
    siteName: "Team Imus",
    url: "Required: Please edit this", // Website URL when deployed
  },
  publisher: "Required: Please edit this",
  keywords: "Required: Please edit this",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        <NextUIProvider>
          <ClerkProvider>
            <TrpcProvider cookies={cookies().toString()}>
              <AppNavbar />
              <main>
                {children}
                <Toaster richColors />
              </main>
            </TrpcProvider>
          </ClerkProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
