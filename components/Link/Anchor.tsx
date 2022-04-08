import NextLink from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  title: string;
  path: string;
}

const Anchor = ({
  className: parentClassNames,
  title,
  path
}: Props) => {

  const router = useRouter();
  // let [isActive, setIsActive] = useState(false)

  // useEffect(() => setIsActive(router.asPath === path), [router.asPath, path])

  const isActive = router.asPath === path
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href={path}
      className={classnames(
        parentClassNames,
        isActive
          ? 'font-semibold text-zinc-800 dark:text-zinc-200'
          : 'font-normal text-zinc-600 dark:text-zinc-400',
        'rounded-lg cursor-pointer hover:text-black dark:hover:text-white px-3 text-gray-600 dark:text-gray-400'
      )}>
      {title}
    </a>
  )
}

export default Anchor