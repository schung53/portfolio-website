import Head from 'next/head';
import { AppProps } from 'next/app';
import '../globals.css';
import { useState } from 'react';
import { ThemeColor } from '@/components/enum';
import { getLogoFile } from '@/utils/color';

function App({ Component, pageProps }: AppProps) {
  const [themeColor, setThemeColor] = useState(ThemeColor.Yellow);
  const favicon = getLogoFile(themeColor);

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Head>
        <title>James S. Chung | SWE</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Head>
      <Component {...pageProps} onSet={setThemeColor} />
    </div>
  );
}

export default App;