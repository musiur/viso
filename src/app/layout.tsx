import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { Toaster } from "@/components/ui/sonner";
import WhatsApp from "./_utils/components/whatsapp";

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
      <body className={`antialiased`}>
        <Toaster />
        <Navbar />
        <WhatsApp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
