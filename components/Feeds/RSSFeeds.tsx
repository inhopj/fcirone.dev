import classnames from 'classnames'
import Image from 'next/image'

interface Props {
  className?: string;
}

const RSSFeeds = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full',
        parentClassNames
      )}
    >
      <div className='pt-8 flex justify-center text-white text-sm cursor-pointer border-t border-zinc-400'>

        <div
          className="pr-2"
        >
          rss
        </div>
        <Image
          src="/rss-feed-logo.svg"
          alt="rss-feed-logo"
          width={15}
          height={15}
        />
      </div>
    </div>
  )
}

export default RSSFeeds;