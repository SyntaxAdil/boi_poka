import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boi Poka",
  description: "A platform for boi poka's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} antialiased  flex flex-col min-h-screen `}>
        <Navbar />
        <main className="my-30  space-y-10 md:space-y-20 max-w-6xl mx-auto flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
