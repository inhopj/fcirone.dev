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
        'flex flex-col justify-start md:px-3',
        parentClassNames
      )}
    >

      <div
        className='flex justify-start text-white text-xl md:text-2xl md:mb-4 mb-3'
      >
        Contacts
      </div>


      <div
        className='flex mb-2'
      >
        <a
          href='https://github.com/inhopj'
          target="_blank"
          rel="noopener"
          className='github inline-flex justify-start items-center cursor-pointer mr-3 hover:text-zinc-400 text-sm text-white transition-all duration-300'
        >
          <Github className='fill-white w-6 ml-0.5 mr-2' />
          inhopj
        </a>
      </div>
      
      
      <div
        className='flex mb-4'
      > 
        {/* avoid brutal usage of transition-all just to hover text */}
        <a
          href='https://linkedin.com/in/fcirone'
          target="_blank"
          rel="noopener"
          className='linkedin inline-flex justify-start items-center cursor-pointer mr-2.5 hover:text-zinc-400 text-sm text-white transition-all duration-300'
        >
          <LinkedinLogo size={28} color="#ffffff" className='mr-2'/>
          fcirone
        </a>
      </div>


    </div>
  )
}

export default Contacts