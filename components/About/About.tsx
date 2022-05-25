import classnames from 'classnames'
import Image from 'next/image'
import Contacts from '../Contacts';
import Github from '../Icons/Github';
import Bio from './Bio';
import Tech from './Tech';
import Work from './Work';

// TODO - centralize this infinitely duplicated interface
interface Props {
  className?: string;
}

const About = ({ className: parentClassNames }: Props) => {
  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full p-0 md:p-3',
        parentClassNames
      )}
    >
      <div className='flex flex-col justify-start text-zinc-400'>
        {/* TODO - Check if uniform space between Work, Tech and Bio sections (spoiler, it's not) */}
        <Work className='mb-6' />
        <Tech className='mb-6' />
        <Bio className='mb-6' />

        <Contacts className='' />
      </div>
    </div>
  )
}

export default About;