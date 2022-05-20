import type { NextPage } from 'next'
import Head from 'next/head'
import feeds from '../public/feeds.json'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Section from '../components/Feeds/Section'

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
      <div className='flex flex-col min-h-screen justify-start items-center p-4 md:p-8 bg-zinc-900'
      >
        <Header className='' />
        <br />

        <div className='flex justify-start items-center max-w-2xl w-full md:pl-3 pb-3 text-white text-xl'>
          A weekly updated collection of Javascript,<br></br> Node and React news and articles
        </div>


        <Section
          icon='/javascript.svg'
          id='javascript'
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

        {/* TODO - Create component */}
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