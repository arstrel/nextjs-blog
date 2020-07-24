import '../styles/global.css';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from '../lib/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Artemio.tech</title>
        <meta
          name="description"
          content="Personal website of Artem Streltsov. 
          Contact me if you are interested in JavaScript, React, Next 
          or anything related to web development"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta charSet="UTF-8" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
