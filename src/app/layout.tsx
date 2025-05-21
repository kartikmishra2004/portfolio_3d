import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kartik Mishra | Full Stack Developer",
  description: "Explore the portfolio of Kartik Mishra, a passionate MERN stack developer specializing in responsive web apps, clean UI design, and seamless user experiences. Open to freelance and collaboration opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html className="dark" lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
