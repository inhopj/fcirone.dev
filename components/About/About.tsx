import classnames from 'classnames'
import Image from 'next/image'
import Github from '../Icons/Github';
import Bio from './Bio';
import Tech from './Tech';
import Work from './Work';

// TODO - centralize this infinitely duplicated interface
interface Props {
  className?: string;
}

const About = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full p-0 md:p-3',
        parentClassNames
      )}
    >
      <div className='flex flex-col justify-start text-zinc-400'>
        <Work className='mb-6' />
        <Tech className='mb-6' />
        <Bio className='mb-6' />

        {/* CONTACTS */}
        <div className='flex justify-center'>
          <div className='flex mr-4 cursor-pointer'>
            <Github className='fill-white w-8' />
          </div>
          <div className='flex mr-4 cursor-pointer'>
            <Image
              src='/linkedin.svg'
              alt="logo-icon"
              width={30}
              height={30}
              className="rounded"
            />
          </div>
          <div className='flex mr-3 cursor-pointer'>
            <Image
              src='/mail.svg'
              alt="logo-icon"
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;