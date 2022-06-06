/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames'
import { At, LinkedinLogo } from 'phosphor-react';
import Github from './Icons/Github';

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
          <Github className='fill-white w-10' />
        </a>
        <a
          href='mailto:fra.cirone@gmail.com'
          className='flex cursor-pointer p-3'
        >
          <At size={42} color="#ffffff" className='at' weight="duotone"/>
        </a>
        <a
          href='https://linkedin.com/in/fcirone'
          target="_blank"
          rel="noopener"
          className='flex cursor-pointer p-3'
        >
          <LinkedinLogo size={42} color="#ffffff" className='linkedin'/>
        </a>
    </div>
  )
}

export default Contacts