import classnames from 'classnames'
import Card from '../Card'
import { ReactNode } from 'react';

interface Props {
  className?: string;
  Icon: ReactNode;
  items: Feed[];
  id: string;
}

export interface Feed {
  title: string;
  link: string;
}

const Section = ({
  className: parentClassNames,
  Icon,
  items,
  id
}: Props) => {

  const getSubtitle = (url: string) => {
    return new URL(url).origin.split('://')[1]
  }

  return (
    <div
      className={classnames('flex-col md:pl-3', parentClassNames)}
    >
      <div className='flex justify-start pb-3'>
        <span id={id}>
          {Icon}
        </span>
      </div>

      <div
        className='flex flex-col'
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
                  'text-zinc-400',
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
    </div>
  )
}

export default Section;