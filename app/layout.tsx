import type { Metadata } from 'next';
import './globals.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { GlobalProvider } from "./providers"; // FIXED PATH

export const metadata: Metadata = {
  metadataBase: new URL("https://arivuonacademy.vercel.app"),

  title: "ArivuOn Academy | Python, DevOps & React Training",

  description:
    "Master in-demand tech skills with our comprehensive Python, DevOps, and React training programs.",

  keywords: [
    "Python training",
    "DevOps course",
    "React development",
    "software training",
    "coding bootcamp",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "ArivuOn Academy | Python, DevOps & React Training",
    description:
      "Master in-demand tech skills with our comprehensive training programs.",
    url: "https://arivuonacademy.vercel.app",
    siteName: "ArivuOn Academy",
    images: [
      {
        url: "/og-image.png", // from public folder
        width: 1200,
        height: 630,
        alt: "ArivuOn Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ArivuOn Academy",
    description: "Master in-demand tech skills.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50/30">

        {/* Provider wraps everything */}
        <GlobalProvider>

          <Header />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />

        </GlobalProvider>

      </body>
    </html>
  );
}
