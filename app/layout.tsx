import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Carattere, Roboto } from "next/font/google";
import { LoadContextProvider } from "@/utils/context";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Emotionary",
  description: "Your daily journal with supported AI. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <LoadContextProvider>{children}</LoadContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
