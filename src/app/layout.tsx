import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-montserrat", 
});

export const metadata = {
  title: "MA Enterprise",
  description: "MA Enterprise Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
