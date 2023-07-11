import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { FunctionComponent } from 'react';
import { Button } from './ui/button';

interface LessonProps {}

const Lesson: FunctionComponent<LessonProps> = () => {
  return (
    <Card>
      <CardHeader className='text-center'>
        <CardTitle>Next.js 13 хичээл</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4 text-center'>
        <p>
          Next.js нь 2016 онд танилцуулагдсан React.js дээр суурилсан дэлхий даяар хамгийн их ашиглагддаг, ерөнхий
          зориулалттай фрэймворк юм.
        </p>
        <p className='text-xl'>
          Үнэ: <span className='text-red-400'>29,900₮</span> <br />
          2023.08.01-ээс эхлэн үнэ <span className='text-red-400'>49,900₮</span> болно.
        </p>
      </CardContent>
      <CardFooter className='justify-center'>
        <Button size='lg'>
          <a href='https://discord.gg/QMR6Q2Tud4' target='_blank'>
            Дэлгэрэнгүй
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Lesson;
