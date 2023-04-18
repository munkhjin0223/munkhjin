import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const meta = {
    title: 'Munkhjin | Portfolio',
    description: 'Munkhjin`s Portfolio Website',
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
