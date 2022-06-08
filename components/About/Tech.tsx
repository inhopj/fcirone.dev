import classnames from 'classnames';

interface Props {
  className?: string;
}

const Tech = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classnames(parentClassNames)}>
      <p className='text-white text-xl md:text-2xl'>
        Tech
      </p>
      <p className="text-zinc-400">
        I love using Node and React to<br />
        build web things.<br />
        Check out the News page for contents<br />
        found here and there <span className='text-white font-bold'>=)</span>
      </p>
    </div>
  )
}

export default Tech;