/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames'
import Image from 'next/image'
import Github from './Icons/Github';
import Linkedin from './Icons/Linkedin';
import Mail from './Icons/Mail';

// TODO - centralize this infinitely duplicated interface
interface Props {
  className?: string;
}

const Contacts = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex justify-center items-center',
        parentClassNames
      )}
    >
      <div className='flex mr-4 cursor-pointer'>
        <a
          href='https://github.com/inhopj'
          target="_blank"
          rel="noopener"
        >
          <Github className='fill-white w-8' />
        </a>
      </div>
      <div
        className='flex mr-4 cursor-pointer'
      >
        <a
          href='https://linkedin.com/in/fcirone'
          target="_blank"
          rel="noopener"
        >
          <Linkedin className='' />
        </a>
      </div>
      {/* TODO - wrap Image in anchor and add mailto */}
      <div className='flex cursor-pointer'>
        <Mail className='fill-white'/>
      </div>
    </div>
  )
}

export default Contacts