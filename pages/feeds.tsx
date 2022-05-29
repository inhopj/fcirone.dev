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
import FloatingGuy from '../components/FloatingGuy'

const Feeds: NextPage = () => {

  const { javascript, node, react } = feeds

  return (
    <>
      <Head>
        <title>Feeds Page</title>
        <meta name="description" content="Feeds page" charSet="UTF-8" />
        <link rel="icon" href="/rss-feed-logo.svg" />
      </Head>

      <div className='flex flex-col min-h-screen justify-between items-center p-4 md:p-8 bg-zinc-900'
      >
        <div
          className='flex flex-col items-stretch max-w-2xl w-full mb-6'
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
          <RSSFeeds />
        </div>
      </div>
      <FloatingGuy />
    </>
  )
}

export default Feeds