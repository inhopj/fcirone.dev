/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'

const Tim = () => {
  return (
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
  )
}

export default Tim