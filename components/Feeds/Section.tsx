import classnames from 'classnames'
import Card from '../Card/Card';
import feeds from '../../public/feeds.json'

interface Props {
  className?: String;
  title: string;
  items: Feed[]
}

export interface Feed {
  title: string;
  link: string;
}

// TODO - cleanup
// TODO - Add icon
const Section = ({
  className: parentClassNames,
  title,
  items,
}: Props) => {
  
  const getSubtitle = (url: string) => {
    return new URL(url).origin.split('://')[1]
  }

  return (
    <>
      <div
        className='flex justify-start max-w-2xl w-full md:pl-3'>
        <h1 id="feeds" className="text-2xl md:text-4xl text-black dark:text-white mb-3">
          {title}
        </h1>
      </div>

      <div
        className={classnames(
          'flex flex-col max-w-2xl w-full md:pl-3',
          parentClassNames
        )}
      >

        {items.map((item, index) => {          
          const last = index === items.length - 1
          const {title, link} = item
          const subtitle = link ? `at ${getSubtitle(link)}` : ''
          return (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a
              key={index}
              href={link}
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
                title={title}
                subtitle={subtitle}
                href={link}
              />
            </a>
          )
        })}
      </div>
    </>
  )
}

export default Section;