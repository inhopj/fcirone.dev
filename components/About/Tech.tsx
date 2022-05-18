import Image from 'next/image'

interface Props {
  className?: String;
}

// TODO - cleanup
const Tech = ({ className: parentClassNames }: Props) => {
  return (
    <div className='pb-4'>
      <div>
        Hi folks!
      </div>
      <p>
        I love using
        <span
          className='inline-flex items-center align-bottom pr-1'
        >
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
            className='cursor-pointer hover:text-white'
          >
            React
          </a>
        </span>
        to make web things. <br /> Peek at my Feeds for related contents!
      </p>
    </div>

  )
}

export default Tech;