/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames'
import Image from 'next/image'
import { PhosphorLogo } from 'phosphor-react';
import Nextjs from './Icons/Nextjs';
import Tailwind from './Icons/Tailwind';
import Triangle from './Icons/Triangle';

interface Props {
  className?: string;
}

const Footer = ({ className: parentClassNames }: Props) => {
  return (
    <>
      <div
        className={classnames(
          'flex max-w-2xl w-full pt-6',
          parentClassNames
        )}
      >
        <div className='flex flex-col w-full'>
          <div className='flex justify-start justify-center text-white text-sm font-bold'>
            built with
          </div>
        </div>
      </div>

      <div
        className='flex max-w-2xl w-full justify-center items-center pt-2 md:pt-2'
      >
        <div className="flex justify-start items-center">
          <a
            className='nextjs flex mr-4'
            href='https://nextjs.org/'
            target='_blank'
          >
            <Nextjs size={28} fill='white' />
          </a>
          <a
            className='tailwind flex mr-4'
            href='https://tailwindcss.com/'
            target='_blank'
          >
            <Tailwind size={28} fill='white' />
          </a>
          <a
            className='flex items-baseline mr-4'
            href='https://vercel.com/'
            target='_blank'
          >
            <Triangle className='w-5' size={20} fill="#ffffff" />
          </a>
          <a
            className='flex items-center md:pb-1'
            href='https://phosphoricons.com/'
            target='_blank'
          >
            <PhosphorLogo size={25} color="#ffffff" weight="duotone" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;