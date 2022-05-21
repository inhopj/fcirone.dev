import Image from 'next/image'
import classnames from 'classnames'
import profilePic from '../../public/avatar.svg'

interface Props {
  className?: string;
}

const Hero = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex flex-col-reverse justify-between items-start md:items-center md:flex-row max-w-2xl w-full',
        parentClassNames
      )}
    >
      <div className='flex flex-col justify-start p-0 md:p-3'>
        <h1 className="text-3xl md:text-5xl text-white">
          Francesco Cirone
        </h1>
        <h2 className='text-zinc-400'>
          Web Developer
        </h2>

      </div>
      <div className='flex self-start mb-4 md:mb-0 '>
        <Image
          src={profilePic}
          height={100}
          width={100}
          alt="profile avatar"
        />
      </div>
    </div>
  )
}

export default Hero;