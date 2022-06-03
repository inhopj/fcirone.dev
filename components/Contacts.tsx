/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames'
import { EnvelopeOpen, GitBranch, LinkedinLogo } from 'phosphor-react';

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
          <GitBranch size={42} color="#ffffff" weight="fill"/>
        </a>
        <a
          href='mailto:fra.cirone@gmail.com'
          className='flex cursor-pointer p-3'
        >
          <EnvelopeOpen size={44} color="#ffffff" />
        </a>
        <a
          href='https://linkedin.com/in/fcirone'
          target="_blank"
          rel="noopener"
          className='flex cursor-pointer p-3'
        >
          <LinkedinLogo size={42} color="#ffffff" />
        </a>
    </div>
  )
}

export default Contacts