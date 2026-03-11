import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
  import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boi Poka",
  description: "A platform for boi poka's",
  
};
import WishListProvider from "@/context/WishList";
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
    <link rel="icon" href="/app/favicon.ico" sizes="any" />
      <body
        className={`${geistSans.variable} antialiased  flex flex-col min-h-screen `}
      >
        <WishListProvider>
          <Navbar />
          <main className="my-20 md:my-30  space-y-10 md:space-y-20 max-w-6xl mx-auto flex-1 w-full">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </WishListProvider>
      </body>
    </html>
  );
}
