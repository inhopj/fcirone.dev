import Image from 'next/image'
import classnames from 'classnames'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Anchor from '../Link/Anchor';

interface Props {
  className?: string;
}

const Header = ({ className: parentClassNames }: Props) => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const homePath = '/#'
  const feedsPath = '/#feeds'

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const handleClick = () => {
    toggle(resolvedTheme as string)
  }
  const toggle = (value: string) => value === 'light' ? setTheme('dark') : setTheme('light')
  
  let imgSrc
  console.log("Resolved theme ", resolvedTheme)

  switch (resolvedTheme) {
    case 'light':
      imgSrc = '/bulb-off.svg'
      break
    case 'dark':
      imgSrc = '/bulb-on.svg'
      break
    default:
      imgSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      break
  }

  return (
    <div
      className={classnames(
        'flex justify-between items-center max-w-2xl w-full',
        parentClassNames
      )}
    >
      <div className="flex justify-start">
        <Anchor
          path={homePath}
          title="Home"
          className='pl-0 md:pl-3'
        />
        <Anchor
          path={feedsPath}
          title="Feeds"
        />
        {/* <a
          href={feedsPath}
          className={classnames(
            parentClassNames,
            true
              ? 'font-semibold text-zinc-800 dark:text-zinc-200'
              : 'font-normal text-zinc-600 dark:text-zinc-400',
            'rounded-lg cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-800 p-3 text-gray-600 dark:text-gray-400'
          )}>
          Feeds
        </a> */}
      </div>
      {mounted && <button
        className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        <Image src={imgSrc} alt="toggle-theme-img" width={25} height={25} />
      </button>}
    </div>
  )
}

export default Header;