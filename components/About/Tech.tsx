/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames';
import Image from 'next/image'

interface Props {
  className?: string;
}

// TODO - cleanup
const Tech = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classnames(parentClassNames)}>
      <p className='text-white text-xl md:text-2xl'>
        Skills
      </p>
      <p className='mb-3'>
        I love using
        <span
          className='inline-flex items-center align-bottom pr-1'
        >
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener"
            className='pl-1 cursor-pointer hover:text-white'
          >
            Node
          </a>
          <Image src="/node-js.svg" alt="Node" width={20} height={20} />
        </span>
        <span>
          and
        </span>
        <span
          className='inline-flex items-center align-bottom pl-1 pr-1'
        >
          <Image src="/react.svg" alt="React" width={20} height={20} />
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener"
            className='cursor-pointer hover:text-white'
          >
            React
          </a>
        </span>
        to <br />build web things.<br />Check out my Feeds for related contents!
      </p>
    </div>

  )
}

export default Tech;