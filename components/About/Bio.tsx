import classnames from "classnames";

interface Props {
  className?: string;
}

const Bio = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classnames(
      'pb-4',
      parentClassNames
    )}>
      <div className='text-white text-xl md:text-2xl'>
        Bio
      </div>
      <p>
        Nintendo person! into outdoors &#127794; &#32;, board sports &#128761; &#32;<br />and foreign languages<br />(🇬🇧, 🇫🇷, 🇪🇸 and a bit of 🇲🇦)
      </p>
    </div>

  )
}

export default Bio;