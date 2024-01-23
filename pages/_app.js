// import Head from 'next/head';
// import { Global } from '@emotion/react';
import Layout from '../components/Layout.js';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return <>
    {/* <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
    <ChakraProvider>
      {/* <Global styles={globalStyles} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
}