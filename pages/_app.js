import Head from 'next/head';
import Layout from '../components/Layout.js';
import { Global } from '@emotion/react';
import { globalStyles } from '../displayParameters/globalStyles';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  s: '10em', //160.px
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

const theme = extendTheme({ breakpoints });

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <ChakraProvider theme={theme}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
}