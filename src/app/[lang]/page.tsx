import { getDictionary } from './dictionaries';

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang); // en

  return (
    <div>
      <h1 className='text-4xl pb-4'>{dict.name}</h1>
      <article className='text-2xl'>{dict.description}</article>
    </div>
  );
}
