// import Head from 'next/head';
import Layout from '../components/Layout.js';
import { Global } from '@emotion/react';
import { globalStyles } from '../displayParameters/globalStyles';

export default function App({ Component, pageProps }) {
  return <>
    {/* <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
    <Global styles={globalStyles} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}