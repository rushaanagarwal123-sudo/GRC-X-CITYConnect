import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "CityConnect | Empowering NYC Neighborhoods",
    description: "Nonprofit organization dedicated to fostering community growth and connection in New York City.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-inter antialiased`}>
                <Sidebar />
                <main className="ml-[260px] min-h-screen flex flex-col">
                    <div className="flex-grow">
                        {children}
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    );
}
