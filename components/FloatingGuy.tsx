import Javascript from './Icons/Javascript';
import Nodejs from './Icons/Nodejs';
import React from '../components/Icons/React'
import { useState } from 'react';
import Anchor from './Link/Anchor';
import classnames from 'classnames';
import Image from 'next/image';

const anchors = [
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
            key={href}
            className={classnames(
              parentClassNames
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