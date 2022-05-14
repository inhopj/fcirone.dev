import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import feeds from '../public/feeds.json'
import Image from 'next/image'

const Header = dynamic(
  () => import('../components/Header/Header'),
  { ssr: false }
)
const Section = dynamic(
  () => import('../components/Feeds/Section'),
  { ssr: false }
)

const Feeds: NextPage = () => {

  const { javascript, node, react } = feeds

  return (
    <>
      <Head>
        <title>Personal Web Page</title>
        <meta name="description" content="xFeeds page" charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CONTAINER */}
      <div className='flex flex-col min-h-screen justify-start items-center p-4 md:p-8
        bg-white
        dark:bg-zinc-900'
      >
        <Header className='' />
        <br />
        <br />

        <Section
          icon='/javascript.svg'
          id='javascript'
          title='Javascript'
          items={javascript}
        />
        <br />
        <br />

        <Section
          icon='/node.png'
          id='node'
          title='Node'
          items={node}
        />
        <br />
        <br />

        <Section
          icon='/react.svg'
          id='react'
          title='React'
          items={react}
        />

        <div className='flex flex-col fixed bottom-5 right-5 md:bottom-10 md:right-10'>
          <a href="#javascript" className='flex mb-4 md:mb-3'>
            <Image
              className='rounded-lg'
              src={'/javascript.svg'}
              alt="logo-icon"
              width={35}
              height={35}
            />
          </a>
          <a href="#node" className='flex mb-3'>
            <Image
              className='rounded-lg'
              src={'/node.png'}
              alt="logo-icon"
              width={35}
              height={40}
            />
          </a>
          <a href="#react" className='flex'>
            <Image
              className='rounded-lg'
              src={'/react.svg'}
              alt="logo-icon"
              width={35}
              height={35}
            />
          </a>
        </div>

      </div>
    </>
  )
}

export default Feeds