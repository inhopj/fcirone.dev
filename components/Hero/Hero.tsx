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
        'flex flex-col-reverse justify-between items-start md:items-center md:flex-row max-w-2xl w-full',
        parentClassNames
      )}
    >
      <div className='flex flex-col justify-start p-0 md:p-3'>
        <h1 className="text-3xl md:text-5xl text-white pb-1">
          Francesco Cirone
        </h1>
        <h2 className='text-zinc-400 pb-4'>
          Software dev into Node, React and everything-js
        </h2>
        <h2 className='text-zinc-400 pb-4'>
          <p>
            Worked at
            <span
              className='inline-flex items-center align-bottom pl-2'
            >
              <Image src="/comcast-logo.svg" alt="Comcast" width={20} height={20}/>
              {/* TODO - Add over effect */}
              <a
                href="https://corporate.comcast.com/company/xfinity/internet/xfi"
                target="_blank"
                rel="noopener noreferrer"
                className='pl-1 cursor-pointer hover:text-white'
              >
                Comcast
              </a>
            </span>
            {/* TODO - Add icon and link */}
            ,
            <span
              className='inline-flex items-center align-bottom pl-2'
            >
              <Image src="/pixeltek_logo.png" alt="Pixeltek" width={15} height={15}/>
              {/* TODO - Add over effect */}
              <a
                href="https://www.pxltk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className='pl-1 cursor-pointer hover:text-white'
              >
                Pixeltek
              </a>
            </span>
            , Toshiba and Tim
          </p>
        </h2>

      </div>
      <div className='flex self-start mb-4 md:mb-0 '>
        <Image
          src={profilePic}
          height={100}
          width={100}
          alt="profile image"
          className=''
        />
      </div>

    </div>
  )
}

export default Hero;