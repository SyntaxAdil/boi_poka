import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WishListProvider from "@/context/WishList";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Boi Poka",
  description: "Lets Read your thirst.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <ClerkProvider>
          <WishListProvider>
            <Navbar />
            <main className="my-20 md:my-30 space-y-10 md:space-y-20 max-w-6xl mx-auto flex-1 w-full px-4">
              {children}
            </main>
            <Footer />
            <ToastContainer position="top-right" autoClose={1500} theme="colored" />
          </WishListProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}