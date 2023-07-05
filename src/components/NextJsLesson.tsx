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
        Next.js нь 2016 онд танилцуулагдсан React.js дээр суурилсан дэлхий даяар хамгийн их ашиглагддаг, ерөнхий
        зориулалттай фрэймворк юм.
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
