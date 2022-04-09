import classnames from 'classnames'
import { useEffect, useState } from 'react';
import Card from '../Card/Card';


interface Props {
  className?: String;
  items: Feed[]
}

export interface Feed {
  title: string;
  guid: string;
}

const Feeds = ({
  className: parentClassNames,
  items
}: Props) => {

  const [tenRandom, setTenRandom] = useState<Feed[]>([])
  useEffect(() => {

    const tenRandomFeeds: Feed[] = items?.sort(() => 0.5 - Math.random()).slice(0, 10)
    console.log("tenRandomFeeds ", tenRandomFeeds)
    setTenRandom(tenRandomFeeds)
  }, [items]
  )

  const getSubtitle = (url: string) => {
    return new URL(url).origin.split('://')[1]
  }

  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full md:pl-3',
        parentClassNames
      )}
    >
      <h1 id="feeds" className="text-2xl md:text-4xl text-black dark:text-white mb-3">
        Feeds
      </h1>
      {tenRandom.map((item, index) => {
        const last = index === tenRandom.length - 1
        const subtitle = item.guid ? `at ${getSubtitle(item.guid)}` : ''
        console.log("ITEM ", item)
        return (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            key={index}
            href={item.guid}
            target='_blank'
          >
            <Card
              key={index}
              className={classnames(
                'text-zinc-600 dark:text-zinc-400',
                {
                  'mb-3': !last
                },
              )}
              title={item.title}
              subtitle={subtitle}
              href={item.guid}
            />
          </a>
        )
      })}
    </div>
  )
}

export default Feeds;