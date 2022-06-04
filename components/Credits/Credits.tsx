import classnames from 'classnames'
import Image from 'next/image'
import { PhosphorLogo, Triangle } from 'phosphor-react';

interface Props {
  className?: string;
}

const Credits = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex flex-col items-stretch max-w-2xl w-full',
        parentClassNames
      )}
    >
      <div className='flex justify-center items-center md:mx-4 text-white text-sm border-t border-zinc-400 pt-4 pb-1'>
        Powered by
      </div>
      <div className='flex justify-center items-center md:mx-4'>
        <div
          className='flex items-center align-center p-2 px-4'
        >
          <Image
            src='/typescript.svg'
            alt="typescript-logo-icon"
            width={24}
            height={24}
          />
        </div>
        <div
          className='flex items-center align-center p-2 px-4'
        >
          <Image
            src='/nextjs-icon.svg'
            alt="next-logo-icon"
            width={24}
            height={24}
          />
        </div>
        <div
          className='flex items-center align-center p-2 px-3'
        >
          <Image
            src='/tailwind.svg'
            alt="tailwind-logo-icon"
            width={26}
            height={26}
          />
        </div>
        <div className='flex items-center align-center p-2 px-4'>
          <Triangle size={24} color="#ffffff" weight="fill" />
        </div>
        <div className='flex items-center align-center p-2 px-4'>
          <PhosphorLogo size={24} color="#ffffff" weight="fill" />
        </div>
      </div>
    </div>
  )
}

export default Credits;