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
    <Link href={path}>
      <a
        href={path}
        className={classnames(
          parentClassNames,
          isActive
            ? 'text-white'
            : 'text-zinc-400',
          'rounded-lg cursor-pointer px-3'
        )}>
        {title}
      </a>
    </Link>
  )
}

export default Anchor