/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames'
import Image from 'next/image'
import { LinkedinLogo, PhosphorLogo, Triangle } from 'phosphor-react';
import Github from './Icons/Github';

interface Props {
  className?: string;
}

const Footer = ({ className: parentClassNames }: Props) => {
  return (
    <>
      {/* FIRST ROW */}
      <div
        className={classnames(
          'flex max-w-2xl w-full border-t border-zinc-400 md:mx-4 pt-4',
          parentClassNames
        )}
      >
        {/* FIRST COL */}
        <div className='flex flex-col w-full'>
          <div className='flex justify-start md:justify-center text-white text-sm font-bold'>CONTACTS</div>
        </div>

        {/* SECOND COL */}
        <div className='flex flex-col w-full'>
          <div className='flex justify-start justify-center text-white text-sm font-bold'>
            BUILT WITH
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div
        className='flex max-w-2xl w-full items-center md:mx-4 pt-1 md:pt-2'
      >
        {/* FIRST COL */}
        <div className='flex flex-col w-full'>
          <div className="flex justify-start md:justify-center">
            <a
              href='https://github.com/inhopj'
              target="_blank"
              rel="noopener"
              className='github flex cursor-pointer transition-all duration-300 mr-4'
            >
              <Github className='fill-white w-9 pb-0.5' />
            </a>
            <a
              href='https://linkedin.com/in/fcirone'
              target="_blank"
              rel="noopener"
              className='linkedin flex cursor-pointer transition-all duration-300'
            >
              <LinkedinLogo size={42} color="#ffffff" />
            </a>
          </div>
        </div>

        {/* SECOND COL */}
        <div className='flex flex-col w-full'>
          <div className="flex justify-start justify-center">
            <a
              className='flex mr-4'
              href='https://nextjs.org/'
              target='_blank'
            >
              <Image
                src='/nextjs-icon.svg'
                alt="next-logo-icon"
                width={32}
                height={32}
              />
            </a>
            <a
              className='flex mr-4'
              href='https://tailwindcss.com/'
              target='_blank'
            >
              <Image
                src='/tailwind.svg'
                alt="tailwind-logo-icon"
                width={32}
                height={32}
              />
            </a>
            <a
              className='flex items-baseline mr-4'
              href='https://vercel.com/'
              target='_blank'
            >
              <Triangle size={27} color="#ffffff" weight="fill" />
            </a>
            <a
              className='flex items-center md:pb-1'
              href='https://phosphoricons.com/'
              target='_blank'
            >
              <PhosphorLogo size={27} color="#ffffff" weight="duotone" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;