import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Frontend Quiz App",
  description: "A quiz app for frontend developers",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme={"light"}>
      <body className="flex justify-center items-center">
        <main className="p-12 w-[1200px]">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
