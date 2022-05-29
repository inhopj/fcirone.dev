import Javascript from './Icons/Javascript';
import Nodejs from './Icons/Nodejs';
import React from '../components/Icons/React'
import { ReactNode, useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

interface Anchor {
  href: string;
  icon: ReactNode;
  parentClassNames: string;
}

const anchors = [
  {
    href: '#rss',
    icon: <Image
      src="/rss-feed.svg"
      alt="rss-feed"
      width={26}
      height={26}
    />,
    parentClassNames: "flex mb-4 md:mb-3"
  },
  { href: '#react', icon: <React className='w-8' />, parentClassNames: "flex mb-4" },
  { href: '#node', icon: <Nodejs className='w-9' />, parentClassNames: "flex mb-4" },
  { href: '#javascript', icon: <Javascript className='w-8 rounded-lg' />, parentClassNames: "flex mb-4" },
]


const FloatingGuy = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className='flex flex-col-reverse items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
    >
      <div
        className='flex justify-center items-center w-9 h-9 rounded-lg bg-[#f0db4f] text-lg'
        onClick={() => setToggle(!toggle)}
      >
        #
      </div>
      {anchors.map(({ href, icon, parentClassNames }, index) => {
        return (
          <div
            // TODO - use classname also for transitionDelay
            style={{ transitionDelay: `${index * 50}ms` }}
            key={href}
            className={classnames(
              parentClassNames,
              "flex transition-all duration-300",
              { "translate-y-10 scale-0 opacity-0": !toggle },
              { "opacity-1 translate-y-0 scale-1": toggle }
            )}
          >
            <a
              href={href}
            >
              {icon}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default FloatingGuy