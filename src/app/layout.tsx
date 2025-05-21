import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Mishra | Full Stack Developer",
  description: "Explore the portfolio of Kartik Mishra, a passionate MERN stack developer specializing in responsive web apps, clean UI design, and seamless user experiences. Open to freelance and collaboration opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
