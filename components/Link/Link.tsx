import NextLink from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router';

interface Props {
  className?: string;
  title: string;
  path: string;
}

const Link = ({
  className: parentClassNames,
  title,
  path
}: Props) => {
  
  const router = useRouter();
  const isActive = router.asPath === path
  return (
    <NextLink href={path}>
      <a className={classnames(
        parentClassNames,
        isActive
          ? 'font-semibold text-zinc-800 dark:text-zinc-200'
          : 'font-normal text-zinc-600 dark:text-zinc-400',
        'rounded-lg cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 p-3 text-gray-600 dark:text-gray-400'
      )}>
        {title}
      </a>
    </NextLink>
  )
}

export default Link