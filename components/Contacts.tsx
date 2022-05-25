import classnames from 'classnames'
import Image from 'next/image'
import Github from './Icons/Github';

// TODO - centralize this infinitely duplicated interface
interface Props {
  className?: string;
}

const Contacts = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex justify-center',
        parentClassNames
      )}
    >
      <div className='flex mr-4 cursor-pointer'>
        {/* TODO - wrap Image in anchor and add link to github profile */}
        <Github className='fill-white w-8' />
      </div>
      {/* TODO - wrap Image in anchor and add link to linkedin profile */}
      <div className='flex mr-4 cursor-pointer'>
        <Image
          src='/linkedin.svg'
          alt="logo-icon"
          width={30}
          height={30}
          className="rounded"
        />
      </div>
      {/* TODO - wrap Image in anchor and add mailto */}
      <div className='flex cursor-pointer'>
        <Image
          src='/mail.svg'
          alt="logo-icon"
          width={35}
          height={35}
        />
      </div>
    </div>
  )
}

export default Contacts