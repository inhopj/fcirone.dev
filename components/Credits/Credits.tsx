import classnames from 'classnames'
import Image from 'next/image'
import Github from '../Icons/Github';
import Vercel from '../Icons/Vercel';

interface Props {
  className?: string;
}

const Credits = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full',
        parentClassNames
      )}
    >
      <div className='flex justify-center md:mx-4 text-white text-sm border-t border-zinc-400 pt-4'>
        <span
          className='inline-flex items-center align-center mr-2'
        >
          Powered by
        </span>
        <span
          className='inline-flex items-center align-center mr-2 ml-1'
        >
          <Image
            src='/nextjs-icon.svg'
            alt="next-logo-icon"
            width={20}
            height={20}
          />
        </span>
        <span
          className='inline-flex items-center align-center mr-2'
        >
          <Image
            src='/typescript.svg'
            alt="typescript-logo-icon"
            width={20}
            height={20}
          />
        </span>
        <span
          className='inline-flex items-center align-center mr-2'
        >
          <Image
            src='/tailwind.svg'
            alt="tailwind-logo-icon"
            width={20}
            height={20}
          />
        </span>
        <span className='inline-flex items-center align-center'>
          <Vercel className='fill-white w-14' />
        </span>
      </div>
    </div>
  )
}

export default Credits;