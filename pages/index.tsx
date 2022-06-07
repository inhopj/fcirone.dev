import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import About from '../components/About/About'
import Credits from '../components/Credits/Credits'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

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
        className='flex flex-col min-h-screen justify-between items-center p-4 md:p-8 bg-zinc-900'
      >
        <div className='flex flex-col items-stretch max-w-2xl w-full mb-6'>
          <Header className='mb-9' />
          <Hero className='mb-9' />
          <About className='' />
        </div>
        <div className='flex flex-col items-stretch max-w-2xl w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home