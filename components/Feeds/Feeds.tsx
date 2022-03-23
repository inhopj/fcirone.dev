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

  const fiveRandomItems = items.sort(() => .5 - Math.random()).slice(0, 5)
  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full pl-3',
        parentClassNames
      )}
    >
      <h1 id="feeds" className="text-2xl md:text-4xl text-black dark:text-white mb-3">
        Feeds
      </h1>
      {fiveRandomItems.map((item, index) => {
        const last = index === items.length - 1
        const subtitle = `at ${item.guid.split('https://')[1].split('/')[0]}`
        return (
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
          />
        )
      })}
    </div>
  )
}

export default Feeds;