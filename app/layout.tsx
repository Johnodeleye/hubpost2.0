import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Bottombar from "@/components/Bottombar";
import LeftSidebar from "@/components/Leftbar";
import Topbar from "@/components/Topbar";
import RightSidebar from "@/components/Rightsidebar";
import { NextAuthProvider } from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Script from "next/script";
import Whatsapp from "@/components/Whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HubPost | Spark, Connect, Ignite",
  description: "Spark, Connect, Ignite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="P2r_Z6CA_GDV7PMAudkhj9jsvXZfGY1Aq77CTvllPJw" />
        {/* Google tag (gtag.js) */}
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-QWN8P5Y682"></Script>
<Script id="google-analytics">
{
   `  window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-QWN8P5Y682');
`}
</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
        {/* <div className="lg:max-w-[900px] lg:px-16 min-h-screen mx-auto py-8 shadow-xl shadow-green-600 flex flex-col px-8"> */}
        <Topbar/>
        
        <main className="flex flex-row">
          <LeftSidebar/>

          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children} <Whatsapp/>
            </div>
            <Footer/>
          </section>

          <RightSidebar/>
          
        </main>
        
        <Bottombar/>
        <Toaster/>
        </NextAuthProvider>
        
      </body>
    </html>
  );
}
