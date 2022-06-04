/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'

const Comcast = () => {
  return (
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
  )
}

export default Comcast