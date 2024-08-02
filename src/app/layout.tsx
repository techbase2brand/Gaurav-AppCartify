import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/Components/Header/Header";
import Footer from "@/app/Footer/Footer";
import Index from "./index";
import { AppStateProvider } from "./Context/AppStateContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turn Your Shopify Store into a Mobile App | AppCartify",
  description:
    "Transform your Shopify store into a mobile app with AppCartify. Boost sales and engagement with features like push notifications, secure checkout, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
 {/* Google Tag Manager */}
 <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-NJQBRR9M');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body>
         {/* Google Tag Manager (noscript) */}
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJQBRR9M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AppStateProvider>
          <Index>{children}</Index>
        </AppStateProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
