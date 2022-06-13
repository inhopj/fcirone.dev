import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Contacts from '../components/Contacts'

// TODO - cleanup unused stuff and icons inside /Icons
// TODO - better folder structure for components
const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* TODO - uniform page titles */}
        <title>Personal Web Page</title>
        <meta name="description" content="My personal web page" charSet="UTF-8" />
        <link rel="icon" href="/avatar.svg" />
      </Head>
      {/* CONTAINER */}
      <div
        className='flex flex-col min-h-screen justify-start items-center p-4 md:p-8 bg-zinc-900'
      >
        <div className='flex flex-col items-stretch max-w-2xl w-full mb-5'>
          <Header className='mb-9' />
          <Hero className='mb-9 md:mb-14' />
          <Info className='mb-9 md:mb-14'/>
          <Contacts />
        </div>
        <div className='flex flex-col items-stretch max-w-2xl w-full fixed bottom-5 md:bottom-10'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home