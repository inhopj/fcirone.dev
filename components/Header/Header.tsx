// import Link from 'next/link'
import Image from 'next/image'
import classnames from 'classnames'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from "next/router";
import Link from '../Link/Link';

interface Props {
  className?: string;
}

const Header = ({ className: parentClassNames }: Props) => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const router = useRouter();
  const homePath = '/'
  const feedsPath = '/#feeds'

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  let imgSrc

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
  console.log("MATCHES?? ", router.asPath === homePath)
  return (
    <div
      className={classnames(
        'flex justify-between items-center max-w-2xl w-full',
        parentClassNames
      )}
    >
      {/* <div className={styles.nav}> */}
      <div className="flex justify-start">
        <Link
          path={homePath}
          title="Home"
          isActive={router.asPath === homePath}
        />
        <Link
          path={feedsPath}
          title="Feeds"
          isActive={router.asPath === feedsPath}
        />

      </div>
      {mounted && <button
        // className={styles.themeSwitcher}
        className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-lg cursor-pointer"
        onClick={() => {
          theme == 'light' ? setTheme('dark') : setTheme('light')
        }}
      >
        {/* {theme} */}
        <Image src={imgSrc} alt="toggle-theme-img" width={25} height={25} />
      </button>}
    </div>
  )
}

export default Header;