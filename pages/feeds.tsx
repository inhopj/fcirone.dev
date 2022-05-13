import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import Section from '../components/Feeds/Section'
// import Header from '../components/Header/Header'
import feeds from '../public/feeds.json'

const Header = dynamic(
  () => import('../components/Header/Header'),
  { ssr: false }
)
const Section = dynamic(
  () => import('../components/Feeds/Section'),
  { ssr: false }
)

// TODO - cleanup
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
        <Header className='mb-7' />
        <Section
          title='Javascript'
          items={javascript}
        />
        <br></br>
        <Section
          title='Node'
          items={node}
        />
        <br></br>
        <Section
          title='React'
          items={react}
        />
      </div>
    </>
  )
}

export default Feeds