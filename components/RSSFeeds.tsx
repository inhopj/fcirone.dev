import Image from 'next/image'

// TODO - make it look more like a button
const RSSFeeds = () => {
  return (
    <a
      target='_blank'
      href="/rss.xml"
      className='flex justify-center text-white text-base cursor-pointer'>
      <div
        className="pr-2"
        id="rss"
      >
        rss
      </div>
      {/* TODO use Phosphor ion here as well */}
      {/* TODO - create component */}
      {/* TODO - consider adding some effect (e.g. hover) */}
      <Image
        src="/rss-feed.svg"
        alt="rss-feed"
        width={20}
        height={20}
      />
    </a>
  )
}

export default RSSFeeds;