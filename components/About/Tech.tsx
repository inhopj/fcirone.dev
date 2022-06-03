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
        build up-to-date web things.<br />
        Check out the Feeds page for a collection<br />
        of interesting news and articles<br />
        found here and there =)
      </p>
    </div>
  )
}

export default Tech;