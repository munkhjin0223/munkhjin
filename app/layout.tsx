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
        {children}
        <footer>
          <ul>
            <li>Linkedin: @bmunkhjin</li>

            <li>GitHub: @munkhjin02223</li>

            <li>Email: munkhjin0223@gmail.com</li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
