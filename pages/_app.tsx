import Head from 'next/head';
import { AppProps } from 'next/app';
import '../globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Head>
        <title>James S. Chung | SWE</title>
        <link rel="icon" type="image/svg+xml" href="/name-logo.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;