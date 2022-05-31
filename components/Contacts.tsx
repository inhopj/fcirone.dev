/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames'
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
        <a
          href='https://github.com/inhopj'
          target="_blank"
          rel="noopener"
          className='flex cursor-pointer p-3'
        >
          <Github className='fill-white w-10 hover:fill-[#fcf258]' />
        </a>
        <a
          href='https://linkedin.com/in/fcirone'
          target="_blank"
          rel="noopener"
          className='flex cursor-pointer p-3'
        >
          <Linkedin className='' />
        </a>
        {/* TODO - create constants file */}
        <a
          href='mailto:fra.cirone@gmail.com'
          className='flex cursor-pointer p-3'
        >
          <Mail className='fill-white hover:fill-[#fcf258]' />
        </a>
    </div>
  )
}

export default Contacts