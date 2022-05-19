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

      <div className='flex justify-center md:mx-4 text-white text-2xl md:text-4xl border-t border-zinc-400 pt-4'>
        <div className='flex mr-3'>
          <Image
            src='/github.svg'
            alt="logo-icon"
            width={25}
            height={25}
          />
        </div>
        <div className='flex mr-3'>
          <Image
            src='/linkedin.svg'
            alt="logo-icon"
            width={25}
            height={25}
            className="rounded"
          />
        </div>
        <div className='flex mr-3'>
          <Image
            src='/mail.svg'
            alt="logo-icon"
            width={30}
            height={30}
          />
        </div>
      </div>

    </div>
  )
}

export default Cotacts;