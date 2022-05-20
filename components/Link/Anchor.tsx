import classnames from 'classnames'
import Link from 'next/link';
import { useRouter } from 'next/router';

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

  const isActive = router.asPath === path

  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    // <a
    //   href={path}
    //   className={classnames(
    //     parentClassNames,
    //     isActive
    //       ? 'text-white'
    //       : 'text-zinc-400',
    //     'rounded-lg cursor-pointer px-3 hover:text-yellow-300'
    //   )}>
    //   {title}
    // </a>

    <Link href={path}>
      <a
        href={path}
        className={classnames(
          parentClassNames,
          isActive
            ? 'text-white'
            : 'text-zinc-400',
          'rounded-lg cursor-pointer px-3 hover:text-yellow-300'
        )}>
        {title}
      </a>
    </Link>
  )
}

export default Anchor