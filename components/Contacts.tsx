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
      <div className='flex mr-4 cursor-pointer'>
        <a
          href='https://github.com/inhopj'
          target="_blank"
          rel="noopener"
        >
          <Github className='fill-white w-8 hover:fill-[#fcf258]' />
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
      <div className='flex cursor-pointer'>
        {/* TODO - create constants file */}
        <a
          href='mailto:fra.cirone@gmail.com'
        >
          <Mail className='fill-white hover:fill-[#fcf258]' />
        </a>
      </div>
    </div>
  )
}

export default Contacts