import Image from 'next/image'
import classnames from 'classnames'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Anchor from '../Link/Anchor';
import { DarkModeToggle } from "react-dark-mode-toggle-2";

interface Props {
  className?: string;
}

const Header = ({ className: parentClassNames }: Props) => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const homePath = '/'
  const feedsPath = '/feeds'

  // TODO - Test and remove mounted-logic since I'm now using dynamic import
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
      </div>

      {/* DARK/LIGHT MODE TOGGLE */}
      {mounted && <DarkModeToggle
        onChange={() => {
          handleClick()
        }}
        isDarkMode={resolvedTheme === 'dark' ? true : false}
        size={50}
        speed={2}
      />}

    </div>
  )
}

export default Header;