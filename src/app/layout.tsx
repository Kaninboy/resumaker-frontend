import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Resumaker",
  description: "Resumaker is a resume maker app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-basebg px-4">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
