import Image from 'next/image'

interface Props {
  className?: String;
}

// TODO - cleanup and add parentClassName
const Bio = ({ className: parentClassNames }: Props) => {

  return (
    <div className='pb-4'>
      <div className='text-white text-xl md:text-2xl'>
        Bio
      </div>
      <p>
        Nintendo person! into outdoors, board sports &#128761; &#32;and foreign languages<br />(English, French, Spanish and a bit of Maroccan)
      </p>
    </div>

  )
}

export default Bio;