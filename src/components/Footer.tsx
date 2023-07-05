import Link from 'next/link';
import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer>
      <ul>
        <li>
          Discord server:{' '}
          <a target='_blank' rel='noopener noreferrer' className='text-sky-800' href='https://discord.gg/QMR6Q2Tud4'>
            QMR6Q2Tud4
          </a>
        </li>
        <li>
          Youtube:{' '}
          <a target='_blank' rel='noopener noreferrer' className='text-sky-800' href='https://youtube.com/@bmuugii'>
            @bmuugii
          </a>
        </li>
        <li>
          Medium blog:{' '}
          <a target='_blank' rel='noopener noreferrer' className='text-sky-800' href='https://medium.com/@munkhjinb'>
            @munkhjinb
          </a>
        </li>

        <li>
          GitHub:{' '}
          <a target='_blank' rel='noopener noreferrer' className='text-sky-800' href='https://github.com/munkhjin0223'>
            @munkhjin0223
          </a>
        </li>

        <li>
          Email:{' '}
          <a rel='noopener noreferrer' className='text-sky-800' href='mailto:munkhjin0223@gmail.com'>
            munkhjin0223@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
