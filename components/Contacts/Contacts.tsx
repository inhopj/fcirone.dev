import classnames from 'classnames'
import Image from 'next/image'

interface Props {
  className?: String;
}

const Cotacts = ({ className: parentClassNames }: Props) => {

  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full',
        parentClassNames
      )}
    >
      <div className='flex justify-center md:mx-4 text-white text-sm border-t border-zinc-400 pt-4 mb-4'>
        Website built using:
        <span
          className='inline-flex items-center align-center mr-2 ml-1'
        >
          <Image
            src='/nextjs-icon.svg'
            alt="next-logo-icon"
            width={20}
            height={20}
          />
        </span>
        <span
          className='inline-flex items-center align-center mr-2'
        >
          <Image
            src='/typescript.svg'
            alt="typescript-logo-icon"
            width={20}
            height={20}
          />
        </span>
        <span
          className='inline-flex items-center align-center mr-2'
        >
          <Image
            src='/tailwind.svg'
            alt="tailwind-logo-icon"
            width={20}
            height={20}
          />
        </span>

      </div>

      <div className='flex justify-center md:mx-4 text-white text-2xl md:text-4xl'>
        <div className='flex mr-4 cursor-pointer'>
          <Image
            src='/github.svg'
            alt="logo-icon"
            width={35}
            height={35}
          />
        </div>
        <div className='flex mr-4 cursor-pointer'>
          <Image
            src='/linkedin.svg'
            alt="logo-icon"
            width={35}
            height={35}
            className="rounded"
          />
        </div>
        <div className='flex mr-3 cursor-pointer'>
          <Image
            src='/mail.svg'
            alt="logo-icon"
            width={40}
            height={40}
          />
        </div>
      </div>

    </div>
  )
}

export default Cotacts;