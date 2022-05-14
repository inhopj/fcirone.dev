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
      </div>
    </>
  )
}

export default Feeds