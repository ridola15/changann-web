import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Changan Jakarta | Changan Pulo Gadung | Changan Jakarta Raya",
  description: "Authorized Dealer in the Greater Jakarta",
  icons: {
    icon: "/logo/changan-logo.jpeg",
  },
  verification: {
    google: "h4Q9ggZ3ZFS0Bc2xT5HsZ05ddwd2wv9N5dTKMh_QE6w",
  },
  openGraph: {
    title: "Changan Jakarta | Changan Pulo Gadung | Changan Jakarta",
    siteName: "Changan Jakarta | Changan Pulo Gadung | Changan Jakarta Raya",
    url: "https://changanjakartaraya.com",
    locale:"id_ID",
    type:"website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Changan Jakarta",
    "alternateName": ["Changan Jakarta Raya", "CHANGAN JAKARTA"],
    "url": "https://changanjakartaraya.com/",
  };
  
  return (
    <html
        lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
