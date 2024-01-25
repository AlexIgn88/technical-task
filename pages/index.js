import Head from 'next/head';
import HomePageFirstSection from '../components/HomePageFirstSection';
import HomePageSecondSection from '../components/HomePageSecondSection';
import HomePageThirdSection from '../components/HomePageThirdSection';


export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomePageFirstSection />
      <HomePageSecondSection />
      <HomePageThirdSection />
    </>
  )
}