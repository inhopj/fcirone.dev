import Image from 'next/image'
import classnames from 'classnames'
import profilePic from '../../public/avatar.svg'


interface Props {
  className?: String;
}

const Hero = ({ className: parentClassNames }: Props) => {

  return (
    <div
      className={classnames(
        'flex flex-col-reverse justify-between items-start md:items-center md:flex-row max-w-2xl w-full ',
        parentClassNames
      )}
    >
      <div className='flex flex-col justify-start p-3'>
        <h1 className="text-3xl md:text-5xl text-black dark:text-white">
          Fra Cirone
        </h1>
        <h2>
          Software Developer
        </h2>
      </div>
      <div className='flex pl-3 md:p-0'>
        <Image
          src={profilePic}
          height={125}
          width={125}
          alt="profile image"
          className=''
          // layout='fill'
        />
      </div>

    </div>
  )
}

export default Hero;