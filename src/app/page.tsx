import NextJsLesson from '@/components/NextJsLesson';

export default async function Page() {
  return (
    <>
      <div>
        <h1 className='text-4xl pb-4 text-center'>Б.Мөнхжин</h1>
        <article className='text-2xl text-center'>Програм хангамжийн инжинер. 12 жилийн ажлын туршлагатай.</article>
      </div>
      <NextJsLesson />
    </>
  );
}
