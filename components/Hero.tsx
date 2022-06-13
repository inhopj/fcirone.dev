import Image from 'next/image'
import classnames from 'classnames'
import Cursor from './Icons/Cursor';
import Avatar from './Icons/Avatar';

interface Props {
  className?: string;
}

const Hero = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex md:flex-row-reverse md:justify-between items-start max-w-2xl w-full md:pl-3',
        parentClassNames
      )}
    >
      <div className='flex mb-4 md:mb-0 '>
        <Avatar size={80} />
      </div>

      <div className='flex flex-col justify-start md:m-0 ml-4 border-2 rounded-lg pl-3 pt-3 pb-2 bg-zinc-800 w-2/4'>

        <div className='flex items-start mb-2'>
          <svg className='w-2.5 mr-2' viewBox="0 0 10 10" fill='#ff5e58' xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" />
          </svg>
          <svg className='w-2.5 mr-2' viewBox="0 0 10 10" fill='#fcf258' xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" />
          </svg>
          <svg className='w-2.5' viewBox="0 0 10 10" fill='#07ad4a' xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" />
          </svg>
        </div>

        <div className="flex text-sm md:text-xl text-white items-baseline">
          <p className='flex text-[#fcf258] mr-2'>{'>'}</p>
          <p className='text-white'>Hi folks!</p>
        </div>
        <div className="flex text-sm md:text-xl items-baseline">
          <p className='flex text-[#fcf258] mr-2'>{'>'}</p>
          <p className='text-white'>I&apos;m Francesco</p>
          <Cursor size={25} className='pl-1' />
        </div>

      </div>
    </div>
  )
}

export default Hero;