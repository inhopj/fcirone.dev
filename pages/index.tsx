import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import Header from '../components/Header/Header'
// import Hero from '../components/Hero/Hero'
// import About from '../components/About/About'
// import Contacts from '../components/Contacts/Contacts'

// TODO - Use normal import as I'm not supporting multiple themes
// hence no client on-demand things are needed 
const Header = dynamic(
  () => import('../components/Header/Header'),
  { ssr: false }
)
const Hero = dynamic(
  () => import('../components/Hero/Hero'),
  { ssr: false }
)
const About = dynamic(
  () => import('../components/About/About'),
  { ssr: false }
)
const Contacts = dynamic(
  () => import('../components/Contacts/Contacts'),
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
      <div className='flex flex-col min-h-screen justify-start p-4 md:p-8 bg-zinc-900'
      >
        <div className='flex flex-col justify-start items-center mb-9'>

          <Header className='mb-9' />
          <Hero className='mb-9' />
          <About className='' />
        </div>
        <div className='flex flex-col items-center'>
          <Contacts className='' />
        </div>
      </div>
    </>
  )
}

export default Home