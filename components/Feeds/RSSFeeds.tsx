import Image from 'next/image'

const RSSFeeds = () => {
  return (
    <div
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
        width={15}
        height={15}
      />
    </div>
  )
}

export default RSSFeeds;