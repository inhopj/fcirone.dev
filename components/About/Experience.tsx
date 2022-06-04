/* eslint-disable react/jsx-no-target-blank */
import classNames from 'classnames';
import Image from 'next/image'

interface Props {
  className?: string;
}

const Experience = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classNames('text-zinc-400',
      parentClassNames
    )}>
      <div className='text-white text-xl md:text-2xl'>
        Experience
      </div>
      <p>
        Frontend Developer at
        <span
          className='inline-flex items-center align-bottom pl-2'
        >
          <Image
            src="/comcast-logo.svg"
            alt="Comcast"
            width={20}
            height={20}
          />
          <a
            href="https://corporate.comcast.com/company/xfinity/internet/xfi"
            target="_blank"
            rel="noopener"
            className='pl-1 cursor-pointer text-white'
          >
            Comcast
          </a>
        </span>
        <br />
        <span
          className='inline-flex items-center align-bottom mr-2'
        >
          <a
            href="https://www.pxltk.com/"
            target="_blank"
            rel="noopener"
            className='cursor-pointer text-white'
          >
            <Image
              src="/pixeltek-logo.png"
              alt="Pixeltek"
              width={65}
              height={14}
              className='pt-1'
            />
          </a>
        </span>
        and
        <span
          className='inline-flex items-center align-bottom ml-2 mr-2'
        >
          <a
            href="https://www.toshiba.it/"
            target="_blank"
            rel="noopener"
            className='cursor-pointer text-white'
          >
            <Image
              src="/toshiba-logo.png"
              alt="toshiba logo"
              width={72}
              height={13}
              className='pt-1'
            />
          </a>
        </span>
        for the<br />
        last few years.<br />
        Recently Node Developer at
        <span
          className='inline-flex items-center align-bottom pl-2'
        >
          <a
            href="https://www.timvision.it"
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer'
          >
            <Image
              src="/tim-logo.png"
              alt="tim logo"
              width={48}
              height={14}
              className='pt-1'
            />
          </a>
        </span>
      </p>
    </div>
  )
}

export default Experience;