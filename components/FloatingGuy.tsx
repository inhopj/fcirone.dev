import Javascript from './Icons/Javascript';
import Nodejs from './Icons/Nodejs';
import React from '../components/Icons/React'
import { useState } from 'react';
import Anchor from './Link/Anchor';
import classnames from 'classnames';
import Image from 'next/image';

const anchors = [
  {
    href: '#rss',
    icon: <Image
      src="/rss-feed-logo.svg"
      alt="rss-feed-logo"
      width={20}
      height={20}
    />,
    parentClassNames: "flex mb-4"
  },
  { href: '#react', icon: <React className='w-9' />, parentClassNames: "flex mb-4" },
  { href: '#node', icon: <Nodejs className='w-10' />, parentClassNames: "flex mb-4" },
  { href: '#javascript', icon: <Javascript className='w-9 rounded-lg' />, parentClassNames: "flex mb-4" },
]


const FloatingGuy = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log(open)
    console.log('OKKKKKKK')
    setOpen(!open)
  }

  return (
    <div
      className='flex flex-col-reverse items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
    >
      <div
        className='flex justify-center items-center w-10 h-10 rounded-full bg-[#f0db4f] text-base' onClick={() => handleOpen()}>
        #
      </div>
      {anchors.map(({ href, icon, parentClassNames }, index) => {
        return (
          <div
            key={href}
            // style={{ transitionDelay: `${index * 25}ms` }}
            className={classnames(
              parentClassNames,
              // "translate-y-8 scale-0 opacity-0 transition-transform duration-300 transition-opacity duration-300",
              // { "opacity-1 translate-y-0 scale-1": open }
              "flex relative transition-all duration-300",
              { "translate-y-10 scale-0 opacity-0": !open },
              { "opacity-1 translate-y-0 scale-1": open }
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

// const FloatingGuy = () => {
//   return (
//     <div
//         className='flex flex-col items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
//       >
//         <a
//           href="#javascript"
//           className='flex mb-4 md:mb-3'
//         >
//           <Javascript className='w-9 rounded-lg' />
//         </a>
//         <a
//           href="#node"
//           className='flex mb-3'
//         >
//           <Nodejs className='w-10' />
//         </a>
//         <a
//           href="#react"
//           className='flex'
//         >
//           <React className='w-9' />
//         </a>
//       </div>
//   )
// }

export default FloatingGuy