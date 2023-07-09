import Head from 'next/head';
import { AppProps } from 'next/app';
import '../globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;