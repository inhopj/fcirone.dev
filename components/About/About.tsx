import classnames from 'classnames'
import Image from 'next/image'
import Tech from './Tech';
import Work from './Work';

interface Props {
  className?: String;
}

const Cotacts = ({ className: parentClassNames }: Props) => {

  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full p-0 md:p-3',
        parentClassNames
      )}
    >
      <div className='flex flex-col justify-start text-zinc-400'>
        
        {/* TECH SECTION */}
        <Tech />

        {/* WORK SECTION */}
        <Work />
      </div>
    </div>
  )
}

export default Cotacts;