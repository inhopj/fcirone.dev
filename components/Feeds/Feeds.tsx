import classnames from 'classnames'
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

  // console.log("ITEMS ", items)
  
  const sevenRandomFeeds = items?.sort(() => 0.5 - Math.random()).slice(0, 10)
  console.log("HERE ", sevenRandomFeeds)
  
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
      {sevenRandomFeeds.map((item, index) => {
        const last = index === items.length - 1
        const subtitle = item.guid ? `at ${getSubtitle(item.guid)}` : ''
        console.log("ITEM ", item)
        return (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            key={index}
            href={item.guid || ''}
            target='_blank'
          >

            <Card
              className={classnames(
                'text-zinc-600 dark:text-zinc-400',
                {
                  'mb-3': !last
                },
              )}
              title={item.title}
              subtitle={subtitle}
            />
          </a>
        )
      })}
    </div>
  )
}

export default Feeds;