import type { GetStaticProps, NextPage } from 'next'
import Parser from 'rss-parser'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Feeds, { Feed } from '../components/Feeds/Feeds'
import Head from 'next/head'

interface Props {
  feeds: Feed[],
  timestamp: Date
}

const Home: NextPage<Props> = ({ feeds, timestamp }) => {
  console.log(feeds)
  return (
    <>
      <Head>
        <title>Personal Web Page</title>
        <meta name="description" content="My personal web page" charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CONTAINER */}
      <div className='flex flex-col min-h-screen justify-start items-center p-8
        bg-white
        dark:bg-zinc-900'
      >
        <Header className="pb-6" />
        <Hero />
        {feeds && <Feeds items={feeds} />}
        <div>
          {timestamp}
        </div>
      </div>


    </>
  )
}

const loadFeeds = async () => {
  
  try {
    //EchoJs RSS feee url TODO - move in constants file
    const RSS_URL = 'https://www.echojs.com/rss'
    
    let parser = new Parser();
    
    const feeds = await parser.parseURL(RSS_URL)
    
    console.log('fdhntrhynf --------- ', feeds)
    console.log('fdhntrhynf --------- ', feeds.items.length)
    
    return feeds

  } catch (error) {
    console.log(error)
  }
}

// // This function runs only on the server side
export const getStaticProps: GetStaticProps = async () => {
  // Instead of fetching your `/api` route you can call the same function directly in `getStaticProps`
  const feeds = (await loadFeeds())?.items
  const timestamp = Date.now()

  // Props returned will be passed to the page component
  return {
    props: { feeds, timestamp },
    revalidate: 60,
  }
}

export default Home