/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'

const Pixeltek = () => {
  return (
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
  )
}

export default Pixeltek