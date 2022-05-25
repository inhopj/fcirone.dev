/* eslint-disable react/jsx-no-target-blank */
import classNames from 'classnames';
import Image from 'next/image'

interface Props {
  className?: string;
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
          <Image src="/comcast-logo.svg" alt="Comcast" width={20} height={20} />
          <a
            href="https://corporate.comcast.com/company/xfinity/internet/xfi"
            target="_blank"
            rel="noopener"
            className='pl-1 cursor-pointer hover:text-white underline underline-offset-2'
          >
            Comcast,
          </a>
        </span>
        <span
          className='inline-flex items-center align-bottom pl-2'
        >
          <Image src="/pixeltek-logo.png" alt="Pixeltek" width={15} height={15} />
          <a
            href="https://www.pxltk.com/"
            target="_blank"
            rel="noopener"
            className='pl-1 cursor-pointer pr-1 hover:text-white underline underline-offset-2'
          >
            Pixeltek
          </a>
        </span>
        &#32; and Toshiba. <br /> Recently as NodeJs Dev at
        <span
          className='inline-flex items-center align-bottom pl-1'
        >
          <a
            href="https://www.timvision.it"
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer hover:text-white underline underline-offset-2'
          >
            Tim
          </a>
        </span>
      </p>
    </div>
  )
}

export default Work;