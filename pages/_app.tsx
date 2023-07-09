import Head from 'next/head';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;