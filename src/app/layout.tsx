import type {Metadata} from "next";
import "./globals.css";
import {Shippori_Mincho_B1} from "next/font/google";

const notojp = Shippori_Mincho_B1({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Nqv",
    description: "Nqv",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2516886759191822" crossOrigin="anonymous"></script>
            </head>
        <body className={notojp.className}
            //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
