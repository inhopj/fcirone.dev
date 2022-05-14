import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Header = dynamic(
  () => import('../components/Header/Header'),
  { ssr: false }
)
const Hero = dynamic(
  () => import('../components/Hero/Hero'),
  { ssr: false }
)

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Personal Web Page</title>
        <meta name="description" content="My personal web page" charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CONTAINER */}
      <div className='flex flex-col min-h-screen justify-start items-center p-4 md:p-8
        bg-white
        dark:bg-zinc-900'
      >
        <Header className='mb-7' />
        <Hero className='mb-6' />
      </div>
    </>
  )
}

export default Home