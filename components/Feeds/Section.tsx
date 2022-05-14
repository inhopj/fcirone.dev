import classnames from 'classnames'
import Card from '../Card/Card'
import Image from 'next/image'

interface Props {
  className?: string;
  icon: string;
  title: string;
  items: Feed[];
  id: string;
}

export interface Feed {
  title: string;
  link: string;
}

// TODO - cleanup
// TODO - Add icon
const Section = ({
  className: parentClassNames,
  icon,
  title,
  items,
  id
}: Props) => {

  const getSubtitle = (url: string) => {
    return new URL(url).origin.split('://')[1]
  }

  return (
    <>
      <div className='flex justify-start items-center max-w-2xl w-full md:pl-3 pb-3'>
        <Image
          className='rounded-lg'
          src={icon}
          alt="logo-icon"
          width={50}
          height={55}
          id={id}
        />
        <a>
          <h1
            className="flex text-2xl md:text-3xl text-black dark:text-white pl-2">
            {title}
          </h1>
        </a>
      </div>

      <div
        className={classnames(
          'flex flex-col max-w-2xl w-full md:pl-3',
          parentClassNames
        )}
      >

        {items.map((item, index) => {
          const last = index === items.length - 1
          const { title, link } = item
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