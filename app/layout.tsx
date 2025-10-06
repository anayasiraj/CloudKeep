import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// using style guide!!!

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CloudKeep",
  description: "CloudKeep - Dream big, we'll keep it safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialised`}>
        {children}
      </body>
    </html>
  );
}
