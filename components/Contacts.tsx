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
        'flex flex-col justify-start items-start md:px-3',
        parentClassNames
      )}
    >

      <div
        className='flex justify-start text-white text-sm font-semibold md:text-xl mb-2'
      >
        Let&apos;s connect!
      </div>


      <div className="flex justify-start items-center">
        <a
          href='https://github.com/inhopj'
          target="_blank"
          rel="noopener"
          className='github flex cursor-pointer transition-all duration-300 p-2 pl-0'
        >
          <Github className='fill-white w-8 pb-0.5' />
        </a>
        <a
          href='https://linkedin.com/in/fcirone'
          target="_blank"
          rel="noopener"
          className='linkedin flex cursor-pointer transition-all duration-250 p-1'
        >
          <LinkedinLogo size={40} color="#ffffff" />
        </a>
        <a
          href='mailto:fra.cirone@gmail.com'
          rel="noopener"
          className='at flex cursor-pointer p-1'
        >
          <At size={36} color="#ffffff" weight='duotone'/>
        </a>
      </div>


    </div>
  )
}

export default Contacts