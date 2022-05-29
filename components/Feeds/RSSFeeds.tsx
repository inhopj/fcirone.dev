import classnames from 'classnames'
import Image from 'next/image'

interface Props {
  className?: string;
}

const RSSFeeds = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className='flex justify-center text-white text-base cursor-pointer'>
      <div
        className="pr-2"
      >
        rss
      </div>
      {/* TODO - create component */}
      {/* TODO - consider adding some effect (e.g. hover) */}
      <Image
        src="/rss-feed-logo.svg"
        alt="rss-feed-logo"
        width={15}
        height={15}
      />
    </div>
  )
}

export default RSSFeeds;