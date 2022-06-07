import classnames from "classnames";

interface Props {
  className?: string;
}

const Bio = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classnames(parentClassNames)}>
      <div className='text-white text-xl md:text-2xl'>
        About
      </div>
      <p className="text-zinc-400">
        Nintendo person!<br />
        Into outdoors &#127794; &#32;, board sports &#128761; &#32;<br />
        and foreign languages<br />
        🇬🇧 🇫🇷 🇪🇸 
      </p>
    </div>
  )
}

export default Bio;