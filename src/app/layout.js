import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Frontend Quiz App",
  description: "A quiz app for frontend developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={"light"} className="bg-secondary">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex flex-col justify-center items-center">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
