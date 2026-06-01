import "./globals.css";
import Footer from "@/components/shared/Footer";
import HeaderDession from "@/components/shared/HeaderDession";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Saintmartin Ships — Symphony Of The Wave, MV The Wave, MV The Crown & Luxury Sundarbans Cruises",
  description:
    "Saintmartin Ships offers premium and luxury cruise services including Symphony Of The Wave, MV The Wave, MV The Crown, MV Rezab, MV Aral Sea, MV Explorer Cruise, and MV The Glory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KFLBSJQN');
            `,
          }}
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        {/* ✅ GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFLBSJQN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <HeaderDession />
        {children}
        <Footer />
      </body>
    </html>
  );
}
