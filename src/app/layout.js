import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Quiz App",
  description: "A quiz app for frontend developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
