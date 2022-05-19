import classNames from 'classnames';
import Image from 'next/image'

interface Props {
  className?: String;
}

const Work = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classNames('text-zinc-400',
      parentClassNames
    )}>
      <div className='text-white text-xl md:text-2xl'>
        Experience
      </div>
      <p>
        Mainly worked as Frontend Dev at <br />
        <span
          className='inline-flex items-center align-bottom'
        >
          {/* TODO - Add over effect */}
          <Image src="/comcast-logo.svg" alt="Comcast" width={20} height={20} />
          <a
            href="https://corporate.comcast.com/company/xfinity/internet/xfi"
            target="_blank"
            rel="noopener noreferrer"
            className='pl-1 cursor-pointer text-white'
          >
            Comcast,
          </a>
        </span>
        <span
          className='inline-flex items-center align-bottom pl-2'
        >
          {/* TODO - Add over effect */}
          <Image src="/pixeltek_logo.png" alt="Pixeltek" width={15} height={15} />
          <a
            href="https://www.pxltk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className='pl-1 cursor-pointer text-white pr-1'
          >
            Pixeltek
          </a>
        </span>
        &#32; and Toshiba. <br /> Recently as NodeJs Dev at Tim.
      </p>
    </div>
  )
}

export default Work;