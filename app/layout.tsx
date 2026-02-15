import type { Metadata } from 'next';
import './globals.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { GlobalProvider } from "./providers"; // FIXED PATH

export const metadata: Metadata = {
  title: 'Vira Academy | Python, DevOps & React Training',
  description: 'Master in-demand tech skills with our comprehensive Python, DevOps, and React training programs. Industry-led courses with hands-on projects.',
  keywords: ['Python training', 'DevOps course', 'React development', 'software training', 'coding bootcamp'],
  openGraph: {
    type: 'website',
    url: 'https://viraacademy.vercel.app',
    title: 'Vira Academy | Python, DevOps & React Training',
    description: 'Master in-demand tech skills with our comprehensive training programs.',
    images: ['./seo_pic.png'],
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
