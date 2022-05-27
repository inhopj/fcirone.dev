import type { NextPage } from 'next'
import Head from 'next/head'
import feeds from '../public/feeds.json'
import Header from '../components/Header/Header'
import Section from '../components/Feeds/Section'
import RSSFeeds from '../components/Feeds/RSSFeeds'
import Javascript from '../components/Icons/Javascript'
import Node from '../components/Icons/Node'
import React from '../components/Icons/React'
import Nodejs from '../components/Icons/Nodejs'

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
      <div className='flex flex-col min-h-screen justify-between items-center p-4 md:p-8 bg-zinc-900'
      >
        <div
          className='flex flex-col items-stretch max-w-2xl w-full'
        >
          <Header className='mb-12' />
          <Section
            Icon={<Javascript className='w-12 rounded-lg' />}
            id='javascript'
            items={javascript}
            className='mb-12'
          />

          <Section
            Icon={<Node className='w-14 h-14 ml-1' />}
            id='node'
            items={node}
            className='mb-12'
          />

          <Section
            Icon={<React className='w-12' />}
            id='react'
            items={react}
          />

        </div>

        <div
          className='flex flex-col max-w-2xl w-full'
        >
          <RSSFeeds className='md:pl-3' />
        </div>
        
        {/* <div
          className='flex flex-col items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
        >
          <a
            href="#javascript"
            className='flex mb-4 md:mb-3'
          >
            <Javascript className='w-9 rounded-lg' />
          </a>
          <a
            href="#node"
            className='flex mb-3'
          >
            <Nodejs className='w-10' />
          </a>
          <a
            href="#react"
            className='flex'
          >
            <React className='w-9' />
          </a>
        </div> */}

      </div>

    </>
  )
}

export default Feeds