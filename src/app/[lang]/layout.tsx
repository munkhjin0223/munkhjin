import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';
import './layout.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Munkhjin | Portfolio',
  description: 'Munkhjin`s Portfolio Website',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'mn' }];
}

const generateLink = (lang: string) => {
  const switchedLang = lang === 'en' ? 'mn' : `en`;

  return (
    <Link className='float-right' href={`/${switchedLang}`}>
      <Image alt='flag' width='30' height='30' src={`/images/${switchedLang}.png`} />
    </Link>
  );
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
          <header className='text-4xl py-4'>{generateLink(params.lang)}</header>
          <div className='flex h-screen flex-col justify-evenly'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
