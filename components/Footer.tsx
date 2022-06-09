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
        className='flex max-w-2xl w-full items-center pt-2 md:pt-2'
      >
        <div className='flex flex-col w-full'>
          <div className="flex justify-start justify-center">
            <a
              className='nextjs flex mr-4'
              href='https://nextjs.org/'
              target='_blank'
            >
              <Image
                src='/nextjs-icon.svg'
                alt="next-logo-icon"
                width={28}
                height={28}
              />
            </a>
            <a
              className='tailwind flex mr-4'
              href='https://tailwindcss.com/'
              target='_blank'
            >
              <Image
                src='/tailwind.svg'
                alt="tailwind-logo-icon"
                width={28}
                height={28}
              />
            </a>
            <a
              className='flex items-baseline mr-4 pt-1'
              href='https://vercel.com/'
              target='_blank'
            >
              <Triangle size={25} color="#ffffff" weight="fill" />
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
      </div>
    </>
  )
}

export default Footer;