import NextJsLesson from '@/components/NextJsLesson';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Next.js 13 хичээл',
  description: 'Next.js 13 хичээл',
};

export default async function Page() {
  return (
    <>
      <NextJsLesson />
      <div>
        <Button className='float-right w-40'>
          <Link href='/'>Буцах</Link>
        </Button>
      </div>
    </>
  );
}
