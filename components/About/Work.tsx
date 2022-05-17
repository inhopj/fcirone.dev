import Image from 'next/image'

interface Props {
  className?: String;
}

const Work = ({ className: parentClassNames }: Props) => {
  return (
    < div className='text-zinc-400 pb-4' >
      <p>
        Worked at
        <span
          className='inline-flex items-center align-bottom pl-2'
        >
          <Image src="/comcast-logo.svg" alt="Comcast" width={20} height={20} />
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
          <Image src="/pixeltek_logo.png" alt="Pixeltek" width={15} height={15} />
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
        , Toshiba and Tim.
      </p>
    </div>
  )
}

export default Work;