import classnames from 'classnames'
import Bio from './Bio'
import Tech from './Tech'
import Experience from './Experience'

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
      <div className='flex flex-col justify-start'>
        <Experience className='mb-6' />
        <Tech className='mb-6' />
        <Bio className='' />
      </div>
    </div>
  )
}

export default About;