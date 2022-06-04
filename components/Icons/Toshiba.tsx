/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'

const Toshiba = () => {
  return (
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
  )
}

export default Toshiba