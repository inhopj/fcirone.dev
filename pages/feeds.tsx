import type { NextPage } from 'next'
import Head from 'next/head'
import feeds from '../public/feeds.json'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Section from '../components/Feeds/Section'
// import RSSFeeds from '../components/Feeds/RSSFeeds'
import Javascript from '../components/Icons/Javascript'
import Node from '../components/Icons/Node'
import React from '../components/Icons/React'
import Nodejs from '../components/Icons/Nodejs'

// TODO - use margin instead of <br>
const Feeds: NextPage = () => {
  
  const { javascript, node, react } = feeds
  
  return (
    <>
      <Head>
        {/* TODO - update with proper info for title and content */}
        {/* TODO - find appropriate favicon(feeds related) */}
        <title>Personal Web Page</title>
        <meta name="description" content="xFeeds page" charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CONTAINER */}
      <div className='flex flex-col min-h-screen justify-start items-center p-4 md:p-8 bg-zinc-900'
      >
        <Header className='mb-9' />
        <br />
        <div className='flex justify-start items-center max-w-2xl w-full md:pl-3 pb-6 text-white text-xl'>
          Monthly updated (more or less xD)
        </div>
        <Section
          Icon={<Javascript className='w-12 rounded-lg'/>}
          id='javascript'
          items={javascript}
        />
        <br />
        <br />

        <Section
          Icon={<Node className='w-14 h-14 ml-1'/>}
          id='node'
          items={node}
        />

        <br />
        <br />

        <Section
          Icon={<React className='w-12' />}
          id='react'
          items={react}
          className='mb-8'
        />

        {/* TODO - Create component FLOATING-GUY */}
        <div
          className='flex flex-col items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
        >
          <a
            href="#javascript"
            className='flex mb-4 md:mb-3'
          >
            <Javascript className='w-9 rounded-lg' />
          </a>
          <a href="#node" className='flex mb-3'>
            <Nodejs className='w-10'/>
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