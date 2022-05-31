import Image from 'next/image'

const RSSFeeds = () => {
  return (
    // TODO - verify how much area is clickable (probably too much)
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