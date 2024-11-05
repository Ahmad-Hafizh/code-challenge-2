import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const poppins = Poppins({ weight: ['900', '700', '600', '500', '300'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GGSJ',
  description: 'Gistara Geya Samasta Jaya',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
