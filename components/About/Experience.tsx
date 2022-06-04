/* eslint-disable react/jsx-no-target-blank */
import classNames from 'classnames';
import Image from 'next/image'
import Comcast from '../Icons/Comcast';
import Pixeltek from '../Icons/Pixeltek';
import Tim from '../Icons/Tim';
import Toshiba from '../Icons/Toshiba';

interface Props {
  className?: string;
}

const Experience = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classNames('text-zinc-400',
      parentClassNames
    )}>
      <div className='text-white text-xl md:text-2xl'>
        Experience
      </div>
      <p>
        Frontend Developer at
        <Comcast />
        <br />
        <Pixeltek />
        and
        <Toshiba />
        for the<br />
        last few years.<br />
        Recently Node Developer at
        <Tim />
      </p>
    </div>
  )
}

export default Experience;