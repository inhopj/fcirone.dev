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
      <div className='flex flex-col justify-start p-0 md:p-3'>
        <div className='text-white text-xl md:text-4xl'>
          Contacts
        </div>
        <div className='text-zinc-400 text-base md:text-lg'>
          Get in touch!
        </div>
      </div>

      <div className='flex justify-center p-0 md:p-3 text-white text-2xl md:text-4xl'>
        <div className='flex p-3 bg-zinc-800 rounded-lg hover:bg-indigo-600 mr-3'>
          <Image
            src='/github-logo.png'
            alt="logo-icon"
            width={25}
            height={25}
          />
        </div>
        <div className='flex p-3 bg-zinc-800 rounded-lg hover:bg-indigo-600 mr-3'>
          <Image
            src='/github-logo.png'
            alt="logo-icon"
            width={25}
            height={25}
          />
        </div>
        <div className='flex p-3 bg-zinc-800 rounded-lg hover:bg-indigo-600'>
          <Image
            src='/github-logo.png'
            alt="logo-icon"
            width={25}
            height={25}
          />
        </div>
      </div>

    </div>
  )
}

export default Cotacts;