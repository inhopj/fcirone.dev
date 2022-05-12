import type { GetStaticProps, NextPage } from 'next'
import Parser from 'rss-parser'
import { Feed } from '../components/Feeds/Feeds'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Feeds = dynamic(
  () => import('../components/Feeds/Feeds'),
  { ssr: false }
)
const Header = dynamic(
  () => import('../components/Header/Header'),
  { ssr: false }
)
const Hero = dynamic(
  () => import('../components/Hero/Hero'),
  { ssr: false }
)

interface Props {
  feeds: Feed[]
}

const Home: NextPage<Props> = ({ feeds }) => {

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
        <Feeds
          className=''
          items={feeds}
        />
      </div>
    </>
  )
}

const loadFeeds = async (): Promise<Feed[]> => {

  try {
    //EchoJs RSS feed url TODO - move in constants file
    const RSS_URL = 'https://www.echojs.com/rss'

    let parser = new Parser();

    const feeds = await parser.parseURL(RSS_URL)

    return feeds.items as Feed[]

  } catch (error) {
    console.log(error)
    return [] as Feed[]
  }
}

// Runs only on the server side
export const getStaticProps: GetStaticProps = async () => {
  // Instead of fetching your `/api` route you can call the same function directly in `getStaticProps`
  const feeds = await loadFeeds()

  // Props returned will be passed to the page component
  return {
    props: { feeds },
    revalidate: 60,
  }
}

export default Home