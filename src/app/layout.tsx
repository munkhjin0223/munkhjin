import Footer from '../components/Footer';
import './layout.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Munkhjin | Portfolio',
  description: 'Munkhjin`s Portfolio Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
          <div className='flex h-screen flex-col justify-evenly'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
