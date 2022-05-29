import Javascript from './Icons/Javascript';
import Nodejs from './Icons/Nodejs';
import React from '../components/Icons/React'
import Image from 'next/image';

const FloatingGuy = () => {
  return (
    <div
      className='flex flex-col items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
    >
      <a
        href="#javascript"
        className='flex mb-4 md:mb-3'
      >
        <Javascript className='w-9 rounded-lg' />
      </a>
      <a
        href="#node"
        className='flex mb-3'
      >
        <Nodejs className='w-10' />
      </a>
      <a
        href="#react"
        className='flex mb-5'
      >
        <React className='w-9' />
      </a>
      <a
        href="#rss"
        className='flex'
      >
        <Image
          src="/rss-feed-logo.svg"
          alt="rss-feed-logo"
          width={22}
          height={22}
        />
      </a>
    </div>
  )
}

export default FloatingGuy