import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

export const metadata: Metadata = {
  title: {
    default: "Viso Way Consultancy",
    template: "%s | Viso Way Consultancy",
  },
  description: "Viso way consultancy. Acheieve your destiny.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
